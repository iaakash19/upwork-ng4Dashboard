import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';




@Component({
  selector: 'dash-menu',
  templateUrl: './dash-menu.component.html',
  styleUrls: ['./dash-menu.component.scss']
})
export class DashMenuComponent implements OnInit {
  
  isOpen = false;
  isActive = false;

  constructor(
    private DashboardService: DashboardService
  ) { }

  ngOnInit() {
  }

  toggleSubnavAndMakeActive() {
    this.isOpen = !this.isOpen;
    this.isActive = !this.isActive;
  }

}
