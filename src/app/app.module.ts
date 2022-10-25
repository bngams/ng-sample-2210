import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExponentialStrengthPipe } from './pipes/exponential-strength.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MATERIAL_MODULES } from './material.barrel';
import { UIModule } from './modules/ui/ui.module';

// TS Decorator
// @NgModule <=> ES Module
@NgModule({
  // declares HTMLElement, declares HTML Syntax
  declarations: [
    AppComponent,
    ExponentialStrengthPipe
  ],

  // imports features
  imports: [
    BrowserModule, // (CommonModule)
    AppRoutingModule,
    BrowserAnimationsModule,
    UIModule
  ],

  // exports features to be loaded in other modules imports
  // exports: []

  // configure DI
  providers: [],

  // app launch
  bootstrap: [AppComponent]
})
export class AppModule { }
