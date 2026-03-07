import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ComplaintService } from '../../Services/complaint.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-complaints',
  imports: [RouterLink, RouterLinkActive, CommonModule, FormsModule],
  templateUrl: './complaints.html',
  styleUrl: './complaints.css',
})
export class Complaints {
selectedFile: File | null = null;
imagePreview: string | null = null;

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

constructor(private complaintService: ComplaintService, private cdr: ChangeDetectorRef) {}

onFileSelected(event: any) {

  const file = event.target.files[0];

  if (!file) return;

  this.selectedFile = file;

  const reader = new FileReader();

  reader.onload = () => {
    this.imagePreview = reader.result as string;
    this.cdr.detectChanges(); 
  };

  reader.readAsDataURL(file);

}

submitComplaint() {

  if (!this.complaintForm.name || !this.complaintForm.mobile || !this.complaintForm.description) {
    this.errorMessage = "कृपया सर्व आवश्यक माहिती भरा"
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

    error: () => {

      this.loading = false;
      this.errorMessage = "तक्रार सादर करताना त्रुटी आली";

      this.cdr.detectChanges();

      setTimeout(() => {
        this.errorMessage = '';
        this.cdr.detectChanges();
      }, 5000);

    }

  })
}
}
