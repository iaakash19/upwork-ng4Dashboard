import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import {Observable} from 'rxjs/observable';
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

    updateProduct(product): Observable<any> {
       let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(product);

        debugger;
         return this.HTTP.put(`http://localhost:3000/products/${product.id}/`, body, options )
            .map( (res: Response) => res.json());
    }
}



    // fetchToken(): Observable<any> {
    //      var headers = new Headers();
    //       headers.append('Content-Type', 'application/x-www-form-urlencoded');

    //     var creds = "username=" + this.username + "&password=" + this.password;
        
    //     return this.http.post('http://flms.internal.fetchr.us/api/auth/', creds, {
    //         headers: headers
    //     }).map( (res: Response) => {
    //             return res.json();
    //     }); 
    // }
