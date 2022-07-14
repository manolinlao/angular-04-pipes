import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';

// PrimeNg
//import { ButtonModule } from 'primeng/button';
//import { CardModule } from 'primeng/card';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';

// Cambiar el locale de la app
import localeES from '@angular/common/locales/es';
import localeFR from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
registerLocaleData( localeES );
registerLocaleData( localeFR );


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    SharedModule,
    PrimeNgModule,
    VentasModule   
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
