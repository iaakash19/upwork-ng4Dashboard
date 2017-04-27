import { Component, OnInit } from '@angular/core';
import { DashboardService } from './../../dashboard.service';
import { AuthService } from './../../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'dash-header',
  templateUrl: './dash-header.component.html',
  styleUrls: ['./dash-header.component.scss']
})
export class DashHeaderComponent implements OnInit {

  constructor(
    private DashboardService: DashboardService,
    private AuthService: AuthService,
    private Router: Router
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

}
