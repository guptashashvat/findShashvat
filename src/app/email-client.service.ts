import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Contact } from './contactDetails';

@Injectable({
  providedIn: 'root'
})
export class EmailClientService {

  constructor(private http: HttpClient) { }
  sendMail(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>('http://localhost:3000/sendmail/', contact)
  }
}
