import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/team/team.service';

@Component({
  standalone: true,
  selector: 'app-create-match',
  templateUrl: './create-match.component.html',
  styleUrls: ['./create-match.component.css'],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
})
export class CreateMatchComponent {
  nextGameForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private teamService: TeamService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.nextGameForm = this.formBuilder.group({
      matchDate: ['', Validators.required],
      stadium: ['', Validators.required],
      team1: ['', Validators.required],
      team2: ['', Validators.required],
      time: ['', Validators.required],
      image2: ['', Validators.required],
      image3: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.nextGameForm.valid) {
      const formData = {
        ...this.nextGameForm.value,
        matchDate: new Date(this.nextGameForm.value.matchDate)
          .toISOString()
          .split('T')[0],     //??????????????????
      };

      this.teamService.submitFormData(formData).subscribe(
        (response) => {
          console.log('Form submitted successfully:', response);

          this.nextGameForm.reset();
          this.router.navigate(['/home']);
        },
        (error) => {
          console.error('Error submitting form:', error);
        }
      );
    } else {
    }
  }
}
