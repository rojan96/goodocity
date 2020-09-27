import { Component, OnInit } from '@angular/core';
import { CommunityService } from '../../services/community.service';

@Component({
  selector: 'app-communities',
  templateUrl: './communities.component.html',
  styleUrls: ['./communities.component.css'],
})
export class CommunitiesComponent implements OnInit {
  communities;
  constructor(private service: CommunityService) {}

  ngOnInit() {
    this.service.getAll().subscribe((data) => {
      this.communities = data;
      console.log(data);
    });
  }
}
