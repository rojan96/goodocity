import { Component, OnInit } from '@angular/core';
import { CommunityService } from '../../services/community.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-communities',
  templateUrl: './communities.component.html',
  styleUrls: ['./communities.component.css'],
})
export class CommunitiesComponent implements OnInit {
  communities;
  id;
  constructor(
    private service: CommunityService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
    if (this.id) {
      this.service.getCommunityByCategory(this.id).subscribe((data) => {
        console.log(data);
        this.communities = data;
      });
    } else {
      this.service.getAll().subscribe((data) => {
        this.communities = data;
      });
    }
  }
}
