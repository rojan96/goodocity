import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  events;
  id;
  word;
  constructor(
    private service: EventService,
    private searchService: SearchService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.word = params.get('word');
      console.log(this.word);
    });

    if (this.id) {
      this.service.getEventByCategory(this.id).subscribe((data) => {
        console.log(data);
        this.events = data;
      });
    } else if (this.word) {
      this.searchService.create({ name: this.word }).subscribe((data) => {
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
          return false;
        };
        console.log(data.body);
        this.events = data.body;
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
