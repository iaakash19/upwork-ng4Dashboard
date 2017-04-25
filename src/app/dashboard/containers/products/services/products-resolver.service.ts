import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs/observable';

import { ProductsService } from './products.service';

@Injectable()
export class ProductsResolver implements Resolve<any> {
    
    constructor(
        private ProductsService: ProductsService
    ) { }
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.ProductsService.getProducts();
    }
}