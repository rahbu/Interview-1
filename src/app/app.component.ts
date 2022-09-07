import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  message = { text: 'Some text for testing.', date: new Date() };

  updateDate(): void {
    this.message.date = new Date();
  }
}

// 1. Dates aren't updating in our fancy new application.  Can you please fix it?
// 2. Our date display is pretty ugly; could you switch it so it looks like '6/15/22, 9:03 AM'?
