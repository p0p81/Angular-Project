import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from 'src/app/types/Player';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css'],
})
export class PlayerDetailsComponent implements OnInit {
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
   

    if (this.id) {
      this.teamService.getPlayer(this.id).subscribe({
        next: (player: Player) => {
          this.player = player;
        }

        
      }),
      (error: any) => {
        console.error(error)
      }

    } else {
      console.error('Id undefined')
    }
  }

  deletePlayer(): void {
    if (this.id) {
      if (confirm('Confirm delete!')) {
        this.teamService.deletePlayer(this.id).subscribe({
         next:()=>{this.router.navigate(['/team/catalog'])} 
        }),
        (error: any) => {
          console.error(error)
        }
      }
    } else {
      console.error('Id undefined')
    }
  }

}
