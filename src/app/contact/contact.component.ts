import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contactDetails';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact: Contact;
  name: string;
  // userName: string;
  // userEmail: string;
  // userPhone: string;
  // message: string;
  constructor() { }

  ngOnInit() {
  }
  processForm(){
    //const allInfo=`My name is ${this.contact.name}. My email is ${this.contact.email}. My phone number is ${this.contact.phone}. My message is ${this.contact.message}`;
    const allInfo=`Test ${this.name}`;
    alert(allInfo);
  }

}
