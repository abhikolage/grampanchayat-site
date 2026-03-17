import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactModel } from '../Models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = "https://grampanchayat-site-api.onrender.com//api/contact";

  constructor(private http: HttpClient) {}

  sendContact(data: ContactModel) {
    return this.http.post(this.apiUrl, data);
  }
}
