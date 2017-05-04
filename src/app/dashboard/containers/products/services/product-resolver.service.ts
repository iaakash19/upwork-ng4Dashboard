import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs/observable';

import { ProductsService } from './products.service';

@Injectable()
export class ProductResolver implements Resolve<any> {
    
    constructor(
        private ProductsService: ProductsService
    ) { }
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        const id = +route.params['id']; // converting string to number with '+'
        return this.ProductsService.getProduct(id);
    }
}