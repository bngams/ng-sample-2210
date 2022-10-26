import { NgModule } from '@angular/core';
import { UIModule } from './ui/ui.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  exports: [
    UIModule, 
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class SharedModule { }
