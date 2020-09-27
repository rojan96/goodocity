import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'card-component',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  inputs: ['object'],
})
export class CardComponent {
  @Input('object') object;

  content: string;
  defaultImage =
    'https://images.unsplash.com/photo-1544928147-79a2dbc1f389?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80';
  constructor(private router: Router) {
    this.content = this.router.url;
    if (this.content.includes('event')) this.content = 'event';
    if (this.content.includes('communit')) this.content = 'community';
  }

  onClick() {
    console.log(this.content);
  }
}
