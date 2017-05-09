import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DahboardRoutingModule } from './dashboard-routing.module';


import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { DashHeaderComponent } from './components/dash-header/dash-header.component';
import { DashMenuComponent } from './components/dash-menu/dash-menu.component';
import { ProductsComponent } from './containers/products/products.component';
import { HomeComponent } from './containers/home/home.component';

import { ProductsService } from './containers/products/services/products.service';
import { ProductsResolver } from './containers/products/services/products-resolver.service';
import { ProductResolver } from './containers/products/services/product-resolver.service';

import { DashboardService } from './dashboard.service';
import { ScreenService } from './screen.service';

import { ScreenBelowLarge } from './directives/screen-below-large.directive';
import { ScreenLarge } from './directives/screen-large.directive';
import { ToggleFullscreenDirective } from './directives/fullscreen.directive';

import {DataTableModule,SharedModule, DropdownModule, TabViewModule, GMapModule, DialogModule} from 'primeng/primeng';
import { ProductEditComponent } from './containers/product-edit/product-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CKEditorModule } from 'ng2-ckeditor';
import {TooltipModule} from 'primeng/primeng';
import { NotificationBoxComponent } from './components/notification-box/notification-box.component';
import { DashMaskComponent } from './components/dash-mask/dash-mask.component';


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    DahboardRoutingModule,
    DataTableModule,
    DropdownModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TabViewModule,
    GMapModule,
    CKEditorModule,
    TooltipModule,
    DialogModule
  ],
  declarations: [DashboardComponent, DashHeaderComponent, DashMenuComponent, ProductsComponent, ProductEditComponent, ScreenBelowLarge, ScreenLarge, HomeComponent, NotificationBoxComponent, ToggleFullscreenDirective, DashMaskComponent],
  providers: [
    ProductsService,
    ProductsResolver,
    ProductResolver,
    DashboardService,
    ScreenService
  ]
})
export class DashboardModule { }
