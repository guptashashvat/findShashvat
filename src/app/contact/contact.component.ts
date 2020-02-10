import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contactDetails';
import { EmailClientService } from '../email-client.service';
import '../../assets/smtpJS.js';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: Contact=new Contact();
  constructor(private emailService: EmailClientService) { };
  Email : any;

  ngOnInit() {
  }
  processForm(){
    this.Email.send({
      Host : "smtp.yourisp.com",
      Username : "username",
      Password : "password",
      To : 'them@website.com',
      From : "you@isp.com",
      Subject : "This is the subject",
      Body : "And this is the body"
  }).then(
    message => alert(message));
    this.emailService.sendMail(this.contact).subscribe(res=> console.log("res: "+res));
    const allInfo=`My name is ${this.contact.name}. My email is ${this.contact.email}. My phone number is ${this.contact.phone}. My message is ${this.contact.message}`;
    alert(allInfo);
  }

}
