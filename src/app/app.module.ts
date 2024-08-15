import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/components/header/header.component';
import { HomeComponent } from './home/home.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoadingSpinnerComponent } from './shared/components/loading-spinner/loading-spinner.component';
import { appReducer } from './AppStore/app.state';
import { AuthTokenInterceptor } from './auth/Services/auth-token.interceptor';
import { BillingComponent } from './billing/billing.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoadingSpinnerComponent,
    BillingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([]),
    HttpClientModule,
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
      // connectInZone: true // If set to true, the connection is established within the Angular zone
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthTokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
