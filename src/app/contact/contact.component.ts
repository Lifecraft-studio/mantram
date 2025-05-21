import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm: Boolean = false;

  formData = {
    name: '',
    contact: '',
    email: '',
    message: ''
  };

  constructor(private http: HttpClient) { }

  onSubmit(form: NgForm) {
    this.http.post('http://localhost:8000/phpmailer.php', this.formData).subscribe(
      (res: any) => {
        console.log('Success:', res);
        form.resetForm();
        this.formData = {
          name: '',
          contact: '',
          email: '',
          message: ''
        };
      },
      (err) => {
        console.error('Error:', err);
      }
    );
  }
}
