import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counterAPP/counter/counter.component';
import { CounterOutputComponent } from './counterAPP/counter-output/counter-output.component';
import { CounterButtonsComponent } from './counterAPP/counter-buttons/counter-buttons.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counterAPP/CounterStore/counter.reducer';
import { CounterInputIncrementComponent } from './counterAPP/counter-input-increment/counter-input-increment.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/components/header/header.component';
import { HomeComponent } from './home/home.component';
import { PostListComponent } from './Post/post-list/post-list.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterOutputComponent,
    CounterButtonsComponent,
    CounterInputIncrementComponent,
    HeaderComponent,
    HomeComponent,
    PostListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ counter: counterReducer }),
    FormsModule,

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
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
