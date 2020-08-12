import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import config from '../../../config';
import {take} from 'rxjs/operators';
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup = new FormGroup({
      fullName: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.pattern('^[2-9]\\d{2}-\\d{3}-\\d{4}$')),
      email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      message: new FormControl('', Validators.required)
  });
  submitSuccess;
  submitFail;
  sendFail;
  constructor( private http: HttpClient) { }

  ngOnInit(): void {
  }

  sendMessage(): void {
    if (this.contactForm.valid) {
      console.log(this.contactForm.getRawValue());
      const sendPayload = {
        sender: {
          name: this.contactForm.controls.fullName.value,
          email: this.contactForm.controls.email.value
        },
        to: [
          {
            name: config.email.accountName,
            email: config.email.accountAddress
          }
        ],
        subject: 'Message from M&M Custom Grazing Website',
        htmlContent: `
            <h1>Message From ${this.contactForm.controls.fullName.value}</h1>
            <hr>
            <p>${this.contactForm.controls.message.value}</p>
        `
      };
      this.http.post(config.email.apiEndpoint, sendPayload,
        {
          headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            'api-key': config.email.apiKey
          }
        }).pipe(take(1)).subscribe(response => {
          this.contactForm.reset();
          this.submitSuccess = true;
          setTimeout(() => this.submitSuccess = false, 3000);
      }, error => {
        this.sendFail = true;
        setTimeout(() => this.sendFail = false, 3000);
      });
    } else {
      this.submitFail = true;
      setTimeout(() => this.submitFail = false, 3000);
    }
  }
}
