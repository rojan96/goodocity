import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  events;
  id;
  constructor(
    private service: EventService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      console.log(this.id);
    });

    if (this.id) {
      this.service.getEventByCategory(this.id).subscribe((data) => {
        console.log(data);
        this.events = data;
      });
    } else {
      this.service.getAll().subscribe((data) => {
        this.events = data;
      });
    }
  }
  newEventCategory(id) {
    console.log(id);
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.router.navigate(['dashboard/events/' + id]);
  }
}
