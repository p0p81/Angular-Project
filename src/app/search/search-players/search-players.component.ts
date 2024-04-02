import { Component } from '@angular/core';
import { TeamService } from 'src/app/team/team.service';
import { Player } from 'src/app/types/Player';

@Component({
  selector: 'app-search-players',
  templateUrl: './search-players.component.html',
  styleUrls: ['./search-players.component.css']
})
export class SearchPlayersComponent {
  players: Player[]= [];
  filteredPlayersList: Player[] = [];
  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.fetchPlayers();
 
  }

fetchPlayers(): void {
  this.teamService.getAllPlayers().subscribe(
    (data: Player[]) => {
      this.players = data;
    this.filteredPlayersList = this.players

    },
    (error) => {
      console.error('Error fetching players:', error);
    }
  )
}
filterResults(text: string) {
  
  if (!text) {
    this.filteredPlayersList = this.players; 
    return;
  }

  this.filteredPlayersList = this.players.filter(

    players => players?.position.toLowerCase().includes(text.toLowerCase())
  );

}
}
