import { Component, OnInit } from '@angular/core';
import { DashboardService } from './../../dashboard.service';
import { ScreenService } from '../../screen.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  constructor(
    private DashboardService: DashboardService,
    private ScreenService: ScreenService
  ) { }

  ngOnInit() {
      // this.ScreenService.resize$
      //     .subscribe( () => {
      //         if(this.ScreenService.screenWidth > this.ScreenService.largeBreakpoint) {

      //         }
      //     })
  }

}
