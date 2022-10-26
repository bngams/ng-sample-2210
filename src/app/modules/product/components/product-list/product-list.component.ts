import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PRODUCTS_MOCK } from '../../mocks/products.mocks';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  products$!: Observable<Product[]>;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // this.initProductsWithMock();
    // this.initProductsWithHttp();
    this.initProductsWithObservable();
  }

  initProductsWithMock(): void {
    this.products = PRODUCTS_MOCK;
  }

  initProductsWithHttp(): void {
    this.productService.fetchProducts().subscribe(data => {
      console.log('httpResult', data);
      this.products = data.products;
    });
  }

  initProductsWithObservable(): void {
    this.products$ = this.productService.fetchProducts().pipe(
      map( data => data.products )
    );
  }

  addProduct(product: Product): void {
    this.products.push(product);
  }

}
