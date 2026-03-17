import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  private apiUrl = "https://grampanchayat-site-api.onrender.com/api/complaint";

  constructor(private http: HttpClient) {}

  submitComplaint(formData: FormData) {
    return this.http.post(this.apiUrl, formData);
  }

}
