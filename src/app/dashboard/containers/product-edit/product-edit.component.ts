import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, FormArray, Validators, AbstractControl } from '@angular/forms';
import { ProductsService } from './../products/services/products.service';

import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit  {
  
  product;
  productForm: FormGroup;
  cities;
  labels;
  
  productNameMessage: string;
  productUrlMessage: string;
  
  // @ViewChild('inputRow') IR: ElementRef;
  
  // ngAfterViewInit() {
  //   console.log(this.IR.nativeElement);
  //   this.IR.nativeElement.insertAdjacentHTML('beforeend', '<div class="two">two</div>');
  // }

  private validationMessages = {
    required: 'is Required',
  }

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private ProductsService: ProductsService,
    private Router: Router
  ) { }
  
  get attrs(): FormArray {
    return <FormArray>this.productForm.get('attrs');
  }

  ngOnInit() {
    
    this.product = this.route.snapshot.data['product'];
    
    this.productForm = this.fb.group({
      name : ['', Validators.required],
      id: [{value: '', disabled: true}],
      tag: '',
      active: '',
      url: ['', Validators.required],
      v_url:'',
      price: '',
      desc:'',
      attrs: this.fb.array(this.buildAttrs())
    });

    this.productForm.patchValue({
      name: this.product.name,
      id: this.product.id,
      tag: this.product.tag,
      active: this.product.active,
      url: this.product.url,
      v_url: this.product.v_url,
      price: this.product.price,
      desc: this.product.desc
    })
  
   //this.productForm.setControl('attrs', this.fb.array(this.product.attrs || []));

     const name = this.productForm.get('name');
     name.valueChanges.debounceTime(1000).subscribe(value => {
      // this.checkErrors(name, 'name');
      this.checkProductName();
    });

    const url = this.productForm.get('url');
     url.valueChanges.debounceTime(1000).subscribe(value => {
      // this.checkErrors(url, 'url');
      this.checkProductUrl();
    });



    this.cities = [];
        this.cities.push({label:'New York', value:'New York'});
        this.cities.push({label:'Rome', value:'Rome'});
        this.cities.push({label:'London', value:'London'});
        this.cities.push({label:'Istanbul', value:'Istanbul'});
        this.cities.push({label:'Paris', value:'Paris'});
        this.cities.push({label:'New York', value:'New York'});
        this.cities.push({label:'Rome', value:'Rome'});
        this.cities.push({label:'London', value:'London'});
        this.cities.push({label:'Istanbul', value:'Istanbul'});
        this.cities.push({label:'Paris', value:'Paris'});
    
    // Labels
    this.labels = [];
    for(let i=0; i<=10; i++) {
      this.labels.push({
        label: 'Label '+i, value:'Label '+i
      });
    }
  }

checkProductName() {
    this.productNameMessage = '';
    const name = this.productForm.get('name');
    this.checkErrors(name, 'name');
  }

  checkProductUrl() {
    this.productUrlMessage = '';
    const url = this.productForm.get('url');
    this.checkErrors(url, 'url');
  }

 checkErrors(c: AbstractControl, type) {
      if( (c.dirty || c.touched) && c.errors ) {
        Object.keys(c.errors).map(key => {
          if(type == 'name') { 
            this.productNameMessage = `Name ${this.validationMessages[key]}`;
          }else {
            this.productUrlMessage =  `Url ${this.validationMessages[key]}`;
          }
        })
      }
    }

    
    buildAttrs(): any {
       return this.product.attrs.map( attr => {
         return this.fb.group({
           label: attr.label,
            value: attr.value
         })
       })
    }

    buildAttr() {
      return this.fb.group({
           label: '',
            value: ''
         })
    }
  

  addAttrRow(i) {
    this.attrs.push( this.buildAttr() );
  }

  removeAttrRow(index) {
    const attrsArr = <FormArray>this.productForm.get('attrs');
    attrsArr.removeAt(index);
  }

  onFormSubmit(){
    console.log(this.productForm.value);
    let productToUpdate = Object.assign({}, this.product, this.productForm.value);
    
    this.ProductsService.updateProduct(productToUpdate)
      .subscribe(item => {
          this.Router.navigate(['/dashboard/products']);
      })
  }

}
