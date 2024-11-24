import { Component, ViewChild } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @ViewChild('register') registerForm!: NgForm;
  form = {
    name: '',
    number: '',
    email: '',
    message: ''
  };
  // submitted = false;

  onSubmit() {
    // this.submitted = true;

    if (!this.form.name || !this.form.number || !this.form.email) {
      // this.submitted = true;
      alert('Form is invalid. Please fill all required fields.');
      return;
    }

    // Define Email.js parameters
    const templateParams = {
      from_name: this.form.name,
      from_email: this.form.email,
      phone_number: this.form.number,
      message: this.form.message
    };

    // Send email using Email.js
    emailjs
      .send(
        'service_h5l6zsf', // Replace with your Email.js service ID
        'template_1lyvokm', // Replace with your Email.js template ID
        templateParams,
        'smf1mFV5weJPykk1z' // Replace with your Email.js user ID (or public key)
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Email sent successfully!');
          // this.submitted = false;
          this.resetForm();
        },
        (error) => {
          console.error('FAILED...', error);
          alert('Failed to send email. Please try again later.');
        }
      );
  }

  resetForm() {
    this.form = {
      name: '',
      number: '',
      email: '',
      message: ''
    };
    if (this.registerForm) {
      this.registerForm.resetForm(); // Reset the entire form, including states
    }
    // this.submitted = false;
  }


  
}
