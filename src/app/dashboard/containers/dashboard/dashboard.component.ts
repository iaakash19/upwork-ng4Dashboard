import { Component, OnInit } from '@angular/core';
import { DashboardService } from './../../dashboard.service';
import { ScreenService } from '../../screen.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  isMenuExpanded: boolean;
  isMenuVisible: boolean;

  constructor(
    public DashboardService: DashboardService,
    public ScreenService: ScreenService
  ) { 
      this.isMenuExpanded = this.DashboardService.isMenuExpanded;
      this.isMenuVisible = this.DashboardService.isMenuVisible;
  }
  


  ngOnInit() {
    


      // this.ScreenService.resize$
      //     .subscribe( () => {
      //         if(this.ScreenService.screenWidth > this.ScreenService.largeBreakpoint) {

      //         }
      //     })
  }

}
