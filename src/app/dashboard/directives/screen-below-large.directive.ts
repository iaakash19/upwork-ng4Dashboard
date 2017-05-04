import { Directive, Input, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';

import { ScreenService } from './../screen.service';
import { DashboardService } from './../dashboard.service';
import { Subscription } from 'rxjs/Subscription';

@Directive({selector: '[screenBelowLarge]'}) 
export class ScreenBelowLarge implements OnDestroy {
  private hasView = false;
  private screenSubscription: Subscription;

  constructor(private viewContainer: ViewContainerRef, 
                private template: TemplateRef<Object>,
                private screenService: ScreenService,
                private DashboardService: DashboardService
                ) {

    this.screenSubscription = screenService.resize$.subscribe(() => this.onResize());

  }

  @Input()
  set screenBelowLarge(condition) {
    // ignore the passed condition and set it based on screen size
    condition = this.screenService.screenWidth < this.screenService.largeBreakpoint;
    
    if (condition && !this.hasView) {
      this.hasView = true;
      this.viewContainer.createEmbeddedView(this.template);
      this.DashboardService.isMenuExpanded = true;
    } else if (!condition && this.hasView) {
      this.hasView = false;
      this.viewContainer.clear();
      this.DashboardService.isMenuExpanded = false;
    }
  }

  ngOnDestroy() {
    this.screenSubscription.unsubscribe();
  }

  onResize() {
    // trigger the setter
    this.screenBelowLarge = false;
  }
}
