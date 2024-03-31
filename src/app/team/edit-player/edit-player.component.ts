import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from 'src/app/types/Player';
import { TeamService } from '../team.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})


export class EditPlayerComponent implements OnInit {
  player: Player | undefined;
  editPlayerForm!: FormGroup;
  

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private teamService: TeamService,
    private router: Router,
    ) {}
    
    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('playerId');
  
      if (id) {
        this.teamService.getPlayer(id).subscribe(player => {
          this.player = player;

          console.log(player)
          // Initialize the form with player data
          this.editPlayerForm = this.formBuilder.group({
            name: [player.name, [Validators.required, Validators.minLength(2)]],
            age: [player.age, Validators.required],
            position: [player.position, Validators.required],
            nationality: [player.nationality, Validators.required],
            image: [player.image],
            details: [player.details]
          });
        });
      } else {
        // Handle error: Player ID not found in route parameters
      }
    }

  playerEdited(): void{
    if (this.player) {

      const updatedPlayer: Player = {
        ...this.player,
        ...this.editPlayerForm.value
      };

      this.teamService.editPlayer(updatedPlayer).subscribe(() => {
        this.router.navigate(['/catalog/details', this.player?._id])
      })
    }
  }

} 
