import {Component} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
  <div>
  <h3>{{ keg.brand }}- {{ keg.name }}</h3>
  <h4>{{ keg.pintCost }}</h4>
  <h4>{{ keg.abv }}</h4>

  </div>
  `
})

export class KegComponent {
  public keg: Keg;
}
