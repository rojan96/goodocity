import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  events;
  constructor(private service: EventService) {}

  ngOnInit() {
    this.service.getAll().subscribe((data) => {
      this.events = data;
      console.log(data);
    });
  }
}
