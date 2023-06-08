import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailserviceService {
  private formUrl = 'https://formspree.io/f/mqkowdrv';
  private headers = new HttpHeaders({'content-type': 'application/json'})
  constructor(private httpClient : HttpClient) { }

  sendEmail(contact: any): Observable<any>{
    return this.httpClient.post<any>(
      this.formUrl,
    {//Post body
      name: contact.firstname + " " + contact.lastname,
      email: contact.email,
      phone: contact.phoneNumber,
      message: contact.msg
    },
    {
      headers: this.headers
    }
    )
  }
}
