import { NgModule } from '@angular/core';
import { MATERIAL_MODULES } from '../material.barrel';

// INSTEAD BARREL WE CAN DECVLARE HERE
// import {MatToolbarModule} from '@angular/material/toolbar';
// import {MatIconModule} from '@angular/material/icon';

// export const MATERIAL_MODULES = [
//   MatToolbarModule,
//   MatIconModule
// ];

@NgModule({
  exports: [
    ...MATERIAL_MODULES
  ]
})
export class MaterialModule { }
