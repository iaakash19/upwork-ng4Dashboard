import { NgModule } from '@angular/core';
import { RouterModule, CanActivate } from '@angular/router';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { ProductsComponent } from './containers/products/products.component';

import { AuthGuardService } from './../auth/auth-guard.service';


// Importing Services
import { ProductsService } from './containers/products/services/products.service';
import { ProductsResolver } from './containers/products/services/products-resolver.service';
import { ProductResolver } from './containers/products/services/product-resolver.service';
import { ProductEditComponent } from './containers/product-edit/product-edit.component';


const ROUTES = [
  {
    path: 'dashboard',
    // canActivate: [AuthGuardService],
    children: [ 
      {
        path: '',
        component: DashboardComponent,
        children: [
          {
            path: 'products',
            children: [
              {
                path: '',
                component: ProductsComponent,
                resolve: { products:  ProductsResolver }
              },
              {
                path: ':id/edit',
                component: ProductEditComponent,
                resolve: { product: ProductResolver }
              }
            ]
            
            
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
