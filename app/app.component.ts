import { Component} from 'angular2/core';
import {Keg} from './keg.model';


@Component({
  selector: 'my-app',
  // directives: ,
  template: `
  <h1>Tap Room!</h1>
  <h3 *ngFor="#keg of kegs">{{ keg.name }}{{ keg.brand }}</h3>
  `
})

export class AppComponent {
  public kegs: Keg[];
  constructor() {
    this.kegs = [
      new Keg("Maid Marion", "Two Towns", 5, 6.1, 0),
      new Keg("Lents Lager", "Zoiglhaus", 4, 4.9, 1),
      new Keg("Hefeweizen", "Widmer", 3.5, 5.0, 2),
      new Keg("Session Black", "Full Sail", 3, 5.0, 3)
    ];
  }
}
