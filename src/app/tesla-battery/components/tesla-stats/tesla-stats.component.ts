import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Stat } from '../../models/stat.interface';

@Component({
  selector: 'tesla-stats',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="tesla-stats">
      <ul>
        <li *ngFor="let stat of stats">
          <div class="tesla-stats-icon tesla-stats-icon--{{ stat.model | lowercase }}"></div>
          <p>{{ stat.miles }}</p>
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['./tesla-stats.component.scss']
})
export class TeslaStatsComponent {
  @Input() stats: Stat[];
}