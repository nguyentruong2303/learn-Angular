import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <h1>Hello Angular</h1>
  <app-hi></app-hi>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learn-angular';
}
