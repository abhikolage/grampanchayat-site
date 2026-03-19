import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ComplaintService } from '../../Services/complaint.service';
import { FormsModule } from '@angular/forms';
import { SiteConfigService } from '../../Services/site-config.service';

@Component({
  selector: 'app-complaints',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './complaints.html',
  styleUrl: './complaints.css',
})
export class Complaints {
  selectedFile: File | null = null;
  imagePreview: string | null = null;
  config: any;

  loading = false;
  success = false;
  errorMessage = '';

  complaintForm = {
    name: '',
    mobile: '',
    email: '',
    aadhaar: '',
    address: '',
    subject: '',
    description: ''
  }

  constructor(private complaintService: ComplaintService, private cdr: ChangeDetectorRef, private configService: SiteConfigService) { }

  ngOnInit() {

    this.config = this.configService.getConfig();

  }

  onFileSelected(event: any) {

    const file = event.target.files[0];

    if (!file) return;

    this.handleFile(file);

  }

  submitComplaint() {

    if (!this.complaintForm.name || !this.complaintForm.mobile || !this.complaintForm.description ||
      !this.complaintForm.aadhaar || !this.complaintForm.address || !this.complaintForm.subject) {
      this.errorMessage = this.config.complaintPage.form.formErrorMessage;
      return
    }

    this.loading = true
    this.success = false
    this.errorMessage = ''

    const formData = new FormData()

    formData.append("name", this.complaintForm.name)
    formData.append("phone", this.complaintForm.mobile)
    formData.append("email", this.complaintForm.email)
    formData.append("aadhaar", this.complaintForm.aadhaar)
    formData.append("address", this.complaintForm.address)
    formData.append("subject", this.complaintForm.subject)
    formData.append("message", this.complaintForm.description)

    if (this.selectedFile) {
      formData.append("photo", this.selectedFile)
    }

    this.complaintService.submitComplaint(formData).subscribe({

      next: () => {

        this.loading = false
        this.success = true

        this.complaintForm = {
          name: '',
          mobile: '',
          email: '',
          aadhaar: '',
          address: '',
          subject: '',
          description: ''
        }
        this.selectedFile = null
        this.imagePreview = null
        this.cdr.detectChanges();

        setTimeout(() => {
          this.success = false;
          this.cdr.detectChanges();
        }, 5000);

      },

      error: (ex: any) => {

        this.loading = false;
        this.errorMessage = this.config.complaintPage.form.sendErrorMessage;

        this.cdr.detectChanges();

        setTimeout(() => {
          this.errorMessage = '';
          this.cdr.detectChanges();
        }, 5000);

      }

    })
  }

  closeImage() {
    this.imagePreview = null;
    this.selectedFile = null;
  }

  onDragOver(event: DragEvent) {
    event.preventDefault()
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault()
  }

  onDrop(event: DragEvent) {

    event.preventDefault()

    if (event.dataTransfer?.files.length) {

      const file = event.dataTransfer.files[0]

      if (!file) return;

      this.handleFile(file);
    }

  }

  handleFile(file: any) {

    this.selectedFile = file;

    const reader = new FileReader();

    reader.onload = () => {
      this.imagePreview = reader.result as string;
      this.cdr.detectChanges();
    };

    reader.readAsDataURL(file);
  }
}
