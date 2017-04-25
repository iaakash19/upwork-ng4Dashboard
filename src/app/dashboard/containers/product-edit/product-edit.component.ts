import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  
  product;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.product = this.route.snapshot.data['product'];
    debugger;
  }

}
