import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';
import { ScreenService } from '../../screen.service';




@Component({
  selector: 'dash-menu',
  templateUrl: './dash-menu.component.html',
  styleUrls: ['./dash-menu.component.scss']
})
export class DashMenuComponent implements OnInit {
  
  isOpen = false;
  isActive = false;
  selectedLink = {};
  menuConf;
  
  constructor(
    public DashboardService: DashboardService,
    public ScreenService: ScreenService
  ) { }

  ngOnInit() {
     this.menuConf = this.DashboardService.menuConf;
  }
  makeMeActive(item) {
    debugger;
    item.active = !item.active;
  }
  toggleSubnavAndMakeActive(index) {
    debugger;

    // this.DashboardService.isMenuExpanded = true;
    // this.isOpen = !this.isOpen;
    // this.isActive = !this.isActive;
  }

}
