import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team/team.service';
import { Player } from '../types/Player';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players: Player[]= [];

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.fetchPlayers();
  }

fetchPlayers(): void {
  this.teamService.getAllPlayers().subscribe(
    (data: Player[]) => {
      this.players = data;
    },
    (error) => {
      console.error('Error fetching players:', error);
    }
  )
}


}
