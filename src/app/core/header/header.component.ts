import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/user/user.service';
import { environment } from 'src/environments/access-key';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnDestroy {
  isAdmin: boolean = false;
  private subscription: Subscription;
  constructor(private userService: UserService, private router: Router) {
    this.subscription = this.userService.user$.subscribe((user) => {
      this.isAdmin = user?._id === environment.KEY;
    });
  }

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  logout() {
    this.userService.logout().subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: () => {
        this.router.navigate(['/login']);
      },
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
