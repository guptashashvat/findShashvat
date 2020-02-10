import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contactDetails';
import { EmailClientService } from '../email-client.service';
import '../../assets/smtpJS.js';
declare let Email: any;
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
  processForm(){
   Email.send({
      Host : "smtp.gmail.com",
      Username : "shashvatgupta39@gmail.com",
      Password : "Dhinkachika39#",
      To : 'shashvatgupta39@gmail.com',
      From : "shashvatgupta39@gmail.com",
      Subject : "This is the subject",
      Body : "And this is the body"
  }).then(
    message => alert(message+" Test"));
    //this.emailService.sendMail(this.contact).subscribe(res=> console.log("res: "+res));
    const allInfo=`My name is ${this.contact.name}. My email is ${this.contact.email}. My phone number is ${this.contact.phone}. My message is ${this.contact.message}`;
    alert(allInfo);
  }

}
