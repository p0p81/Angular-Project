import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Player } from 'src/app/types/Player';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
  player: Player | undefined;
  editPlayerForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private teamService: TeamService,
    private router: Router
  ) {
    this.editPlayerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      age: ['', Validators.required],
      position: ['', Validators.required],
      nationality: ['', Validators.required],
      image: [''],
      details: ['']
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('playerId');
    if (id) {
      this.loadPlayerData(id);
    } else {
 
      console.error('Player ID is required');
      this.router.navigate(['/not-found']);
    }
  } 
  loadPlayerData(id: string): void {
    this.teamService.getPlayer(id).subscribe({
      next: (player) => {
     
        if (this.isValidPlayerData(player)) {
          this.player = player;
          this.editPlayerForm.patchValue(player);
        } else {
        
          console.error('Invalid player data received');
     
        }
      },
      error: (err) => {
        console.error('Failed to load player data', err);
  
      }
    });
  }

  isValidPlayerData(player: Player): boolean {

    const isValidName = !!player.name && player.name.length >= 2;
    const isValidAge = !!player.age && !isNaN(player.age) && player.age > 0;
    const isValidPosition = !!player.position && player.position.length > 0;
    const isValidNationality = !!player.nationality && player.nationality.length > 0;
  
    return isValidName && isValidAge && isValidPosition && isValidNationality;
  }
  
  playerEdited(): void {
    if (this.player && this.editPlayerForm.valid) {
      const updatedPlayer: Player = {
        ...this.player,
        ...this.editPlayerForm.value
      };

      this.teamService.editPlayer(updatedPlayer).subscribe({
        next: () => {
          this.router.navigate(['/team/catalog/details', this.player?._id]);
        },
        error: (err) => {
          console.error('Failed to update player', err);
          
        }
      });
    }
  }
} 