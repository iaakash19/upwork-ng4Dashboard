import { Component, OnInit } from '@angular/core';
import { DashboardService } from './../../dashboard.service';


@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private DashboardService: DashboardService
  ) { }

  ngOnInit() {
    
  }

}
