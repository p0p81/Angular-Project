import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{


  constructor(private userService: UserService, private router: Router, private fb: FormBuilder) {}
  loginForm!: FormGroup;

  ngOnInit(): void {
    this.loginForm  = this.fb.group({
      email: ['', [Validators.required, Validators.email, 
        Validators.minLength(8)
      ]
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
 

  

  login() {
 
    if (this.loginForm.valid) {
      this.userService.login(this.loginForm.value.email.trim(), this.loginForm.value.password.trim()).subscribe({
        next: (response)=>{
          console.log('Login successful', response);
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.error('Login failed', error);
       
        }
      });
    }else{
      console.log('Form is not valid');
    }
  }

}
