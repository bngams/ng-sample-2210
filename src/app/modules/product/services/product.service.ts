import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductAPIResponse } from '../models/productAPIResponse';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  fetchProducts(): Observable<ProductAPIResponse> {
    return this.http.get<ProductAPIResponse>(`${environment.apiBaseUrl}/products`);
  }
}
