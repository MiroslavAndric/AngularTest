import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrvaKomponentaComponent } from './prva-komponenta/prva-komponenta.component';
import { DrugaKomponentaComponent } from './druga-komponenta/druga-komponenta.component';

@NgModule({
  declarations: [
    AppComponent,
    PrvaKomponentaComponent,
    DrugaKomponentaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
