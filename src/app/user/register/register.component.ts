import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { emailValidator } from 'src/app/shared/email-validator';
import { passwordMatchValidator } from 'src/app/shared/password-match';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {

  form = this.fb.group({
    email: ['', [Validators.required, emailValidator(['bg', 'com'])]],   //CHECK  EMAIL_DOMAINS
    password: ['',[Validators.required, Validators.minLength(6)]], 
    rePassword: ['', [Validators.required, passwordMatchValidator]],
  });

  constructor(private fb: FormBuilder) {}

  register(): void {
    if (this.form.invalid) {
      return;
    }
  }
}
