import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {

  // @ViewChild('app-product-list')
  // @ViewChild('(#)myProductList')
  @ViewChild(ProductListComponent)
  productListComponent!: ProductListComponent;

  constructor() { }

  ngOnInit(): void {
  }

  productCreated(product: Product) {
    console.log('productCreated', product);
    this.productListComponent.addProduct(product);
  }

}
