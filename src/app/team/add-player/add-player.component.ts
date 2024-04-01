import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Player } from 'src/app/types/Player';
import { TeamService } from '../team.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css'],
})
export class AddPlayerComponent implements OnInit {
  addPlayerForm!: FormGroup; // Define FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private teamService: TeamService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Initialize the form with FormBuilder
    this.addPlayerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      age: [null, Validators.required],
      position: ['', Validators.required],
      nationality: ['', Validators.required],
      image: [''],
      details: [''],
    });
  }

  createPlayer() {
    if (this.addPlayerForm.valid) {
      const playerData: Player = this.addPlayerForm.value;
      this.teamService.createPlayer(playerData).subscribe(() => {
        this.router.navigate(['/team/catalog']);
        this.addPlayerForm.reset();
      });
    }
  }
}
