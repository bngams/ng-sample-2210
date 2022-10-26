import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  @Output()
  submitEvent: EventEmitter<Product> = new EventEmitter();

  productForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(4)]),
    price: new FormControl('', [Validators.required]),
  });

  // productForm = new UntypedFormGroup({
  //   name: new UntypedFormControl('', [Validators.required, Validators.minLength(4)]),
  //   price: new UntypedFormControl('', [Validators.required]),
  // });

  // productForm = new FormGroup<>({
  //   name: new FormControl<string>('', {nonNullable: true, validators: [Validators.required, Validators.minLength(4)]}),
  //   price: new FormControl<number>(0, {nonNullable: true, validators: [Validators.required]}),
  // });

  constructor() { }

  ngOnInit(): void {
  }

  submit(): void {
    // since Angular 14 typed form
    // const product: Product = this.productForm.getRawValue();
    // const product: Product = this.productForm.value as Required<typeof this.productForm.value>;
    const product: Product = this.productForm.value;
    console.log('submit', product);
    // trigger an event 
    this.submitEvent.emit(product);
  }

}
