import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from '../angular-material.component.module';
import { AppComponent } from './app.component';
import { ManComponent } from './man/man.component';
import 'hammerjs'; // Required by Angular Material

@NgModule({
  declarations: [
    AppComponent,
    ManComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
