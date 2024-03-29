import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from 'src/app/types/Player';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})


export class EditPlayerComponent implements OnInit {
  player: Player | undefined;
  
   id = this.route.snapshot.paramMap.get('playerId');

  constructor(
    private route: ActivatedRoute,
    private teamService: TeamService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.getPlayerDetails();
    
  }

  getPlayerDetails(): void {
   
    console.log();
    if (this.id) {
      this.teamService.getPlayer(this.id).subscribe({
        next: (player: Player) => {
          this.player = player;
        },
      });
    }
  }

  playerEdited(): void{
    if (this.player) {
      this.teamService.editPlayer(this.player).subscribe(() => {
        this.router.navigate(['/catalog/details', this.player?._id])
      })
    }
  }

}
