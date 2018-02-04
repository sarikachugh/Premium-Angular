import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InsurapremComponent } from './insuraprem/insuraprem.component';
import { InsurancePremiumService } from './insuraprem/insurance-premium.service';
import { InsuranceService } from './insurance.service';

@NgModule({
  declarations: [
    AppComponent,
    InsurapremComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [InsurancePremiumService, InsuranceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
