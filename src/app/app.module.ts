import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CharacteristicsComponent } from './characteristics/characteristics.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [AppComponent, CharacteristicsComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, ReactiveFormsModule, FormsModule, MatCheckboxModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
