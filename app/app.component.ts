import { Component, EventEmitter} from 'angular2/core';
import { KegListComponent} from './keg-list.component'
import {Keg} from './keg.model';


@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
  <div class="container">
  <h1>Tap Room</h1>
  <keg-list [kegList]="kegs" (onKegSelect)="kegWasSelected($event)"></keg-list>
  </div>
  `
})

export class AppComponent {
  public kegs: Keg[];
  constructor() {
    this.kegs = [
      new Keg("Maid Marion", "Two Towns", 5, 6.1),
      new Keg("Lents Lager", "Zoiglhaus", 4, 4.9),
      new Keg("Hefeweizen", "Widmer", 3.5, 5.0),
      new Keg("Session Black", "Full Sail", 3, 5.0)
    ];
  }
  kegWasSelected(clickedKeg: Keg): void {
    console.log('parent', clickedKeg);
  }
}
