import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailValidator, notOnlyWhitespaceValidator } from 'src/app/shared/email-validator';
import { passwordMatchValidator } from 'src/app/shared/password-match';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {

  form = this.fb.group({
    email: ['', [Validators.required, emailValidator()]],  
    passGroup: this.fb.group({ 
      password:['', [Validators.required, Validators.minLength(6),notOnlyWhitespaceValidator()]],
      rePassword:['', Validators.required],
    }, { validators: [passwordMatchValidator('password', 'rePassword')] })
  });

  get passGroup() {
    return this.form.get('passGroup');
  }

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {}

  register(): void {
    if (this.form.invalid) {
      return;
    }

    const {
      email, 
      passGroup: { password, rePassword } = {},
    } = this.form.value;

    this.userService.register(email!, password!).subscribe(() => {

      this.router.navigate(['/']);
    });
  }
}
