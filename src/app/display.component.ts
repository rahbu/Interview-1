import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'display',
  template: `<h1> {{message.date}}</h1> <p>{{message.text}}</p>`,
  styles: [`h1 { font-family: Lato; }`],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisplayComponent {
  @Input() message: { text: string; date: Date } = {
    text: 'Default',
    date: new Date(),
  };
}
