import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ContactService } from '../../Services/contact.service';
import { ContactModel } from '../../Models/contact.model';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import { SiteConfigService } from '../../Services/site-config.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  config: any;
  safeMapUrl!: SafeResourceUrl;
  constructor(private contactService: ContactService, private cdr: ChangeDetectorRef, private configService: SiteConfigService,
    private sanitizer: DomSanitizer) { }

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


  ngOnInit() {

    this.config = this.configService.getConfig();
    this.safeMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.config.contactPage.map.embedUrl
    );

  }

  submitContact() {

    if (!this.contactForm.name || !this.contactForm.mobile || !this.contactForm.subject || !this.contactForm.message) {
      this.errorMessage = this.config?.contactPage?.form?.formErrorMessage;
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
        this.errorMessage = this.config?.contactPage?.form?.sendErrorMessage;

        this.cdr.detectChanges();

        setTimeout(() => {
          this.errorMessage = '';
          this.cdr.detectChanges();
        }, 5000);

      }

    });

  }

}
