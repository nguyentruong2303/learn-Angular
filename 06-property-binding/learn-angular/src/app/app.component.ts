import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template :`
  <h1 [ngStyle]= "{color:textColor}">
    {{title}}</h1>
  <img [src] = "imgSrc">
  `

})
export class AppComponent {
  title = 'learn-angular';
  imgSrc = "https://loremflickr.com/320/240";
  textColor = 'tomato';


}
