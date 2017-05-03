import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'notification-box',
  templateUrl: './notification-box.component.html',
  styleUrls: ['./notification-box.component.scss']
})
export class NotificationBoxComponent implements OnInit {

  constructor() { }
  
  @Input()
    notifications: Array<any>


  ngOnInit() {
  }

}
