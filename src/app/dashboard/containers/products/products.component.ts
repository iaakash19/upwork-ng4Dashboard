import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  
  products: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.products = this.route.snapshot.data['products'];
    debugger;
  }

  onRowSelect(product) {
    this.router.navigate([product.data.id, 'edit'], {relativeTo: this.route});
      // <a [routerLink]="['/products', product.id, 'edit']">Edit</a>
  }

}
