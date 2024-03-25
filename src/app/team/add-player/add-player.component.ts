import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  playerForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    
    this.playerForm = this.formBuilder.group({
      name: ['', Validators.required],
      age: [null, Validators.required],         
      position: ['', Validators.required],
      nationality: ['', Validators.required],
      image:[''],
      details: ['']
    });
  }

 
  onSubmit() {
    if (this.playerForm.valid) {
      console.log(this.playerForm.value);
      this.playerForm.reset(); // Reset the form after submission
    }
  }
}