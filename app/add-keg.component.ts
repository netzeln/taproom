import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'keg-add',
  outputs: ['onSubmitAddKeg'],
  template: `
  <div class="keg-form">
  <h1><i>Create Keg</i></h1>
  <input placeholder="Name" class="col-sm-8 input-lg" #newName>
  <input placeholder="Brand" class="col-sm-8 input-lg" #newBrand>
  <input placeholder="Price" class="col-sm-8 input-lg" type="number" #newPrice>
  <input placeholder="Abv" class="col-sm-8 input-lg" type="number" #newABV>
  <button (click)="addKeg(newName, newBrand, newPrice, newABV)">Add</button>
  </div>
  `
})

export class AddKegComponent {
  public onSubmitAddKeg: EventEmitter<Keg>;
  constructor(){
    this.onSubmitAddKeg = new EventEmitter();
  }
  addKeg(inputName: HTMLInputElement, inputBrand: HTMLInputElement, inputPrice: HTMLInputElement, inputABV: HTMLInputElement){
    var newKeg = new Keg(inputName.value, inputBrand.value, parseInt(inputPrice.value), parseFloat(inputABV.value));
    console.log(inputName.value, inputBrand.value, inputPrice.value, inputABV.value);
  //   userDescription.value = "";
  }
}
