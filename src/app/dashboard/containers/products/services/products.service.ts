import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductsService{
    constructor(private HTTP: Http) {}

    getProducts() {
        return this.HTTP
            .get('http://localhost:3000/products')
            .map((res: Response) => res.json())
    }

    getProduct(id) {
        return this.HTTP
            .get(`http://localhost:3000/products/${id}`)
            .map((res: Response) => res.json())
    }

    updateProduct(product) {
        debugger;
         return this.HTTP
            .put(`http://localhost:3000/products/${product.id}`, product)
            .map((res: Response) => {
                debugger; 
            })
    }
}