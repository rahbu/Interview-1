import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class AppComponent {
  message = { text: 'Some text for testing.', date: new Date() };

  updateDate(): void {
    this.message.date = new Date();
  }
}

// 1. Dates aren't updating in our fancy new application.  Can you please fix it?

// 2. Our date display is pretty ugly; could you switch it so it looks like '6/15/22, 9:03 AM'?

// 3. We've just decided that we're going to have a lot more dates in our app and this is our one chance to decide on a strategy.  Are there any rules for handling dates you'd like to put in place?
