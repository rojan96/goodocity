import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-component',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  inputs: ['object'],
})
export class CardComponent {
  @Input('object') object;
  constructor() {}
}
