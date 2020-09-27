import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailService } from '../../services/detail.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private service: DetailService) {}
  data;
  id;
  title;
  image;

  profileImageUrl =
    'https://marketplace.canva.com/EADzkaU9XJI/1/0/400w/canva-red-yellow-black-white-wavy-female-woman-girl-teen-portrait-simplified-illustration-square-laptop-sticker-_czOVX8ezRU.jpg';
  eventImageUrl =
    'https://images.unsplash.com/photo-1544928147-79a2dbc1f389?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80';
  communityImageUrl =
    'https://images.unsplash.com/photo-1600959907703-125ba1374a12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';

  ngOnInit() {
    this.title = this.route.url;
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
    this.service
      .getDetail(this.title.value['0'].path, this.id)
      .subscribe((detail) => {
        this.data = detail;
        console.log(this.data);
        if (this.title == 'profile') this.image = this.profileImageUrl;
        if (this.title == 'event') this.image = this.eventImageUrl;
        if (this.title == 'community') this.image = this.communityImageUrl;
      });
  }
}
