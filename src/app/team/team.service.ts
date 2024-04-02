import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Player } from '../types/Player';
import { Match } from '../types/Match';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private apiUrl = `${environment.apiUrl}`;
  private players$$ = new BehaviorSubject<Player[]>([]);

  constructor(private http:HttpClient) { }

  createPlayer(playerData: Player): Observable<Player> {
    return this.http.post<Player>(`${this.apiUrl}/data/players`, playerData);
  }

  getAllPlayers(): Observable<Player[]> {
    this.http.get<Player[]>(`${this.apiUrl}/data/players`).subscribe({
      next: players => this.players$$.next(players),
      error: error => console.error('Error fetching players', error)
    })

  return this.players$$.asObservable()
  };
  

  getPlayer(id: string): Observable<Player> {
    return this.http.get<Player>(`${this.apiUrl}/data/players/${id}`);
  }

  deletePlayer(id: string): Observable<Player> {
    return this.http.delete<Player>(`${this.apiUrl}/data/players/${id}`);

  }

  editPlayer(player:Player):Observable<Player>{
    const editUrl = `${this.apiUrl}/data/players/${player._id}`
    return this.http.put<Player>(editUrl, player);
  }
  submitFormData(formData:Match){
    return this.http.post<Match>(`${this.apiUrl}/data/matches`, formData)
  }
  getMatches(){
    return this.http.get<Match[]>(`${this.apiUrl}/data/matches`)
  }
}
