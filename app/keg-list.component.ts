import {Component} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  directives: [KegComponent],
  template: `
    <keg-display *ngFor="#currentKeg of kegList" (click)="kegClicked(currentKeg)" [class.selected]='currentKeg === selectedKeg' [keg]='currentKeg'>
    </keg-display>
  `
})

export class KegListComponent{
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
}
