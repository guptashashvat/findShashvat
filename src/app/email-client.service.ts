import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact } from './contactDetails';

@Injectable({
  providedIn: 'root'
})
export class EmailClientService {

  constructor(private http: HttpClient) { }
  sendMail(contact: Contact): Observable<string> {
    let body = JSON.stringify(contact);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<string>('http://localhost:3000/sendmail/', body, {headers: headers})
  }
}
