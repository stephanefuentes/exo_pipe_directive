import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MontantPipe } from './montant.pipe';
import { FilterPipe } from './filter.pipe';
import { ElevesComponent } from './eleves/eleves.component';
import { FormsModule } from "@angular/forms";
import { FluoDirective } from './fluo.directive';

@NgModule({
  declarations: [
    AppComponent,
    MontantPipe,
    FilterPipe,
    ElevesComponent,
    FluoDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
