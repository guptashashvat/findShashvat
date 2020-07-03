import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contactDetails';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: Contact=new Contact();
  show: boolean=false;
  
  constructor(private _snackBar: MatSnackBar) { }; 

  ngOnInit() {
  }
  public sendEmail(e: Event, isValid: boolean, formData: any) {
    e.preventDefault();
    if(!isValid){
      alert("Please make sure you've filled the form with valid values. Thanks!")
      return;
    }
    this.show=true;    
    emailjs.sendForm('gmail', 'template_u5Bkh4Jh', e.target as HTMLFormElement, 'user_THRxDqGSiFitKzwcdJm0b')
      .then((result: EmailJSResponseStatus) => {
        this.show=false;
        this.contact=new Contact();
        setTimeout(() => formData.form.controls['reply_to'].setErrors(null) );
        setTimeout(() => formData.form.controls['from_name'].setErrors(null) );
        setTimeout(() => formData.form.controls['message_html'].setErrors(null) );
        this._snackBar.open("Your message has been sent to Shashvat. Thank a lot for showing interest.", "Ok", {
          duration: 6000,
        });
        
      }, (error) => {
        this.show=false;
        this._snackBar.open("Oops! Couldn't send your message due to some error. Please retry after sometime. Or alternatively you can contact Shashvat through email or phone number provided on this page. Thanks.", "Ok", {
          duration: 15000,
        });
      });
  } 
  
}
