import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-us.component.html'
})
export class ContactUsComponent {
  formData: ContactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form submitted:', this.formData);
      // Add your form submission logic here
    }
  }
}
