import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { HeaderComponent } from './components/header.component';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ], 
  // public 
  exports: [
    HeaderComponent,
    MaterialModule
  ]
})
export class UIModule { }
