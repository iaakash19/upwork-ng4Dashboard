import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DahboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { DashHeaderComponent } from './components/dash-header/dash-header.component';
import { DashMenuComponent } from './components/dash-menu/dash-menu.component';
import { ProductsComponent } from './containers/products/products.component';

import { ProductsService } from './containers/products/services/products.service';
import { ProductsResolver } from './containers/products/services/products-resolver.service';
import { ProductResolver } from './containers/products/services/product-resolver.service';


import {DataTableModule,SharedModule, EditorModule} from 'primeng/primeng';
import { ProductEditComponent } from './containers/product-edit/product-edit.component';

@NgModule({
  imports: [
    CommonModule,
    DahboardRoutingModule,
    DataTableModule,
    EditorModule,
    SharedModule,
    FormsModule
  ],
  declarations: [DashboardComponent, DashHeaderComponent, DashMenuComponent, ProductsComponent, ProductEditComponent],
  providers: [
    ProductsService,
    ProductsResolver,
    ProductResolver
  ]
})
export class DashboardModule { }
