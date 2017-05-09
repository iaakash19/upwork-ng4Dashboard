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
    item.active = !item.active;
  }

  toggleSubnav(item, $event) {
    debugger;
    item.active = !item.active;
    $event.stopPropagation();
  }

}
