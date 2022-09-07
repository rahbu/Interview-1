import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisplayComponent {
  @Input() message: { text: string; date: Date } = {
    text: 'Default',
    date: new Date(),
  };
}
