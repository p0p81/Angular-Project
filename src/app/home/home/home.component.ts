import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/team/team.service';
import { Match } from 'src/app/types/Match';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  matches: Match[] = []; 

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.getMatches();
    console.log(this.matches)
  }

  getMatches(): void {
    this.teamService.getMatches().subscribe(
      (matches: Match[]) => {
        this.matches = matches; 
        console.log('Matches:', this.matches);
      },
      (error) => {
        console.error('Error getting matches:', error);
        
      }
    );
  }
}
