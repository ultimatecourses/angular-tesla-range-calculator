/*
 * app.module.ts
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// our feature module
import { TeslaBatteryModule } from './tesla-battery/tesla-battery.module';

// our app component
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // include our TeslaBatteryModule
    TeslaBatteryModule
  ],
  providers: [],
  // bootstrap the AppComponent
  bootstrap: [AppComponent]
})
export class AppModule {}