import { Component, OnInit, Pipe } from '@angular/core';
import { ErrorService } from './error.service';
import { pipe } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [JsonPipe, AsyncPipe],
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  apiError$ = this.errorService.apiError$$.asObservable();
  constructor(private errorService: ErrorService, private router:Router) { }
  errMsg = ''

  ngOnInit(): void {
    this.apiError$.subscribe((err: any) => {
      if(err.status === 403){
        err.message = "Wrong email or password"
       this.errMsg = err.message
        

      }else{
        this.errMsg = err.message

      }
    })
  }
}
