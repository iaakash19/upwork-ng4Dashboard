import { Component, OnInit } from '@angular/core';
import { DashboardService } from './../../dashboard.service';
import { AuthService } from './../../../auth/auth.service';
import { ScreenService } from '../../screen.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormArray, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'dash-header',
  templateUrl: './dash-header.component.html',
  styleUrls: ['./dash-header.component.scss']
})
export class DashHeaderComponent implements OnInit {
  
  isSecBarVisible = false;
  drop = false;

    cities = [];
        searchForm;

  constructor(
    public DashboardService: DashboardService,
    public AuthService: AuthService,
    public Router: Router,
    public ScreenService: ScreenService,
     private fb: FormBuilder,
  ) { }
  
  toggleDrop(event) {
    this.drop = !this.drop;
    event.preventDefault();
  }

  ngOnInit() {
    this.cities.push({label:'New York', value:'New York'});
        this.cities.push({label:'Rome', value:'Rome'});
        this.cities.push({label:'London', value:'London'});
        this.cities.push({label:'Istanbul', value:'Istanbul'});
        this.cities.push({label:'Paris', value:'Paris'});
        this.cities.push({label:'New York', value:'New York'});
        this.cities.push({label:'Rome', value:'Rome'});
        this.cities.push({label:'London', value:'London'});
        this.cities.push({label:'Istanbul', value:'Istanbul'});
        this.cities.push({label:'Paris', value:'Paris'});

        this.searchForm = this.fb.group({
          tag: '',
          name: '',
          fromdate: '',
          todate: ''
    });

  }
  onSubmit() {
    debugger;
    console.log('this.searchForm', this.searchForm.value);
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

  toggleNotif() {
    this.DashboardService.isNotifVisible = !this.DashboardService.isNotifVisible;
  }

}
