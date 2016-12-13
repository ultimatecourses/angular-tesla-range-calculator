import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// containers
import { TeslaBatteryComponent } from './containers/tesla-battery/tesla-battery.component';

// components
import { TeslaCarComponent } from './components/tesla-car/tesla-car.component';
import { TeslaStatsComponent } from './components/tesla-stats/tesla-stats.component';
import { TeslaCounterComponent } from './components/tesla-counter/tesla-counter.component';
import { TeslaClimateComponent } from './components/tesla-climate/tesla-climate.component';
import { TeslaWheelsComponent } from './components/tesla-wheels/tesla-wheels.component';

// services
import { BatteryService } from './tesla-battery.service';

@NgModule({
  declarations: [
    TeslaBatteryComponent,
    TeslaCarComponent,
    TeslaStatsComponent,
    TeslaCounterComponent,
    TeslaClimateComponent,
    TeslaWheelsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    BatteryService
  ],
  exports: [
    TeslaBatteryComponent
  ]
})
export class TeslaBatteryModule {}