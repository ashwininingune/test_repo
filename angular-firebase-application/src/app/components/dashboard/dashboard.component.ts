import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isShowing!: boolean;
  constructor(private authService: AuthenticationService, 
              private router: Router) {}

  ngOnInit(): void {
  }

  toggleSidenav() {
    this.isShowing = !this.isShowing;
  }
  
  logout() {
    this.authService.signOut();
  }

}
