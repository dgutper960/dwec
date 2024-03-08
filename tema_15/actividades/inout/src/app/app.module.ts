import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CardComponent } from './card/card.component';

import {MatCardModule} from '@angular/material/card';
import { AddcardComponent } from './addcard/addcard.component';

import { FormsModule } from '@angular/forms'; // Importa FormsModule


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    AddcardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
