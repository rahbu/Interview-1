import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1> {{message.date}}!</h1> <p>{{message.text}}</p>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class DisplayComponent {
  @Input() message: { text: string; date: Date } = {
    text: '',
    date: new Date(),
  };
}
