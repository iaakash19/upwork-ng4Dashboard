import { Component, OnInit } from '@angular/core';
import { DashboardService } from './../../dashboard.service';
import { AuthService } from './../../../auth/auth.service';
import { ScreenService } from '../../screen.service';
import { Router } from '@angular/router';

@Component({
  selector: 'dash-header',
  templateUrl: './dash-header.component.html',
  styleUrls: ['./dash-header.component.scss']
})
export class DashHeaderComponent implements OnInit {
  
  isSecBarVisible = false;

  constructor(
    private DashboardService: DashboardService,
    private AuthService: AuthService,
    private Router: Router,
    private ScreenService: ScreenService
  ) { }

  ngOnInit() {
  }

  toggleMenu() {
    this.DashboardService.isMenuExpanded = !this.DashboardService.isMenuExpanded;
  }

  triggerLogout() {
    this.AuthService.logoutUser();
    this.Router.navigate(['/login']);
  }

  togglePrimeNav() {
    this.DashboardService.isMenuVisible = !this.DashboardService.isMenuVisible;
  }

}
