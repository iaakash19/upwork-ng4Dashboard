import { NgModule, Component } from '@angular/core';
import { RouterModule, CanActivate } from '@angular/router';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { ProductsComponent } from './containers/products/products.component';
import { HomeComponent } from './containers/home/home.component';

import { AuthGuardService } from './../auth/auth-guard.service';


// Importing Services
import { ProductsService } from './containers/products/services/products.service';
import { ProductsResolver } from './containers/products/services/products-resolver.service';
import { ProductResolver } from './containers/products/services/product-resolver.service';
import { ProductEditComponent } from './containers/product-edit/product-edit.component';


const ROUTES = [
  {
    path: 'dashboard',
    //canActivate: [AuthGuardService],
    children: [ 
      {
        path: '',
        component: DashboardComponent,
        data: { title: 'Dashboard' }, 
        children: [
          {
            path: 'products',
            children: [
              {
                path: '',
                component: ProductsComponent,
                resolve: { products:  ProductsResolver },
                data: { title: 'Products' }
              },
              {
                path: ':id/edit',
                component: ProductEditComponent,
                resolve: { product: ProductResolver },
                data: { title: 'Product' }
              }
            ]
          },
          {
            path: 'home',
            component: HomeComponent,
            data: { title: 'Dashboard' }
          }
        ]
      }
  ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports:[RouterModule] // as Router Module provides Directives to app component
  
})
export class DahboardRoutingModule { }
