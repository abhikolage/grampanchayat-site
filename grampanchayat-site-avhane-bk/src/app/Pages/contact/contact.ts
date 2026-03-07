import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ContactService } from '../../Services/contact.service';
import { ContactModel } from '../../Models/contact.model';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
constructor(private contactService: ContactService, private cdr: ChangeDetectorRef) {}

 loading = false;
success = false;
errorMessage = '';

  contactForm: ContactModel = {
    name: '',
    mobile: '',
    email: '',
    subject: 'सामान्य चौकशी',
    message: ''
  };

submitContact() {

  if (!this.contactForm.name || !this.contactForm.mobile || !this.contactForm.message) {
    this.errorMessage = "कृपया सर्व आवश्यक माहिती भरा";
    return;
  }

  this.loading = true;
  this.success = false;
  this.errorMessage = '';

  this.contactService.sendContact(this.contactForm).subscribe({

    next: () => {

      this.loading = false;
      this.success = true;

      this.contactForm = {
        name: '',
        mobile: '',
        email: '',
        subject: 'सामान्य चौकशी',
        message: ''
      };

       this.cdr.detectChanges();

      setTimeout(() => {
        this.success = false;
        this.cdr.detectChanges();
      }, 5000);

    },

    error: () => {

      this.loading = false;
      this.errorMessage = "संदेश पाठवताना त्रुटी आली";

       this.cdr.detectChanges();

      setTimeout(() => {
        this.errorMessage = '';
        this.cdr.detectChanges();
      }, 5000);

    }

  });

}

}
