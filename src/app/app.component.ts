import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, NavigationStart, NavigationCancel, NavigationError } from '@angular/router';
import { Title } from '@angular/platform-browser';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import { DashboardService } from './dashboard/dashboard.service';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'app works!';
  loading: boolean;

  constructor(
      private router: Router,
      private activatedRoute: ActivatedRoute,
      private titleService: Title,
      private slimLoadingBarService: SlimLoadingBarService,
      private DashboardService: DashboardService
  ) {
      
  }

   startLoading() {
        this.slimLoadingBarService.start(() => {
        });
    }

    stopLoading() {
        this.slimLoadingBarService.stop();
    }

    completeLoading() {
        this.slimLoadingBarService.complete();
    }

    
  ngOnInit() {
    this.router.events
          .subscribe(routerEvent => {
            this.interceptRouterEvent(routerEvent);
          });

    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      .filter(route => route.outlet === 'primary')
      .mergeMap(route => route.data)
      .subscribe((event) => this.titleService.setTitle(event['title']));
  }

  interceptRouterEvent(routerEvent) {
    debugger;
       if (routerEvent instanceof NavigationStart) {
            
            this.startLoading();
            debugger;
        }

        if (routerEvent instanceof NavigationEnd ||
            routerEvent instanceof NavigationCancel ||
            routerEvent instanceof NavigationError) {
            this.loading = false;
            this.completeLoading();
            debugger;
            if(routerEvent.url === "/dashboard/products") {
                this.DashboardService.showProductSearch = true;
            }else {
                this.DashboardService.showProductSearch = false;
            }
        }
  }
}
