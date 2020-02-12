import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contactDetails';
import { EmailClientService } from '../email-client.service';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: Contact=new Contact();
  constructor(private emailService: EmailClientService) { }; 

  ngOnInit() {
  }
  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.send('gmail', 'template_u5Bkh4Jh', e.target as HTMLFormElement, 'user_THRxDqGSiFitKzwcdJm0b')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }
  processForm(){
    const allInfo=`My name is ${this.contact.name}. My email is ${this.contact.email}. My phone number is ${this.contact.phone}. My message is ${this.contact.message}`;
    alert(allInfo);
  }
}
