import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs/observable';

import { ProductsService } from './products.service';
import { DashboardService } from './../../../dashboard.service';

@Injectable()
export class ProductsResolver implements Resolve<any> {
    
    constructor(
        private ProductsService: ProductsService,
        private DashboardService: DashboardService
    ) { 
        this.DashboardService.showInlineLoader = true;
    }
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        this.DashboardService.showInlineLoader = false;
        return this.ProductsService.getProducts();
    }
}