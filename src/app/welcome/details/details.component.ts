import { Component } from '@angular/core';
import { AnalyticsService } from 'src/app/shared/analytics.service';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  constructor(private analyticsService: AnalyticsService) {}

  onClick() {
    this.analyticsService.registerClick();
  }
}
