import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailService } from '../../services/detail.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  constructor(
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private service: DetailService
  ) {}
  data;
  id;
  title;
  image;
  userId;

  ngOnInit() {
    this.title = this.route.url;
    this.userId = localStorage.getItem('id');
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
    this.service
      .getDetail(this.title.value['0'].path, this.id)
      .subscribe((detail) => {
        this.data = detail;
      });
  }

  successmsg(message) {
    this.toastr.success(message, 'Success');
  }

  joinCommunity(id) {
    console.log(`User #${this.userId} is joining Community #${id}`);
    this.service.addMemberCommunity(this.userId, id).subscribe((result) => {
      console.log(result);
      this.successmsg('Successfully Joined Community');
    });
  }

  goToEvent(id) {
    console.log(`User #${this.userId} is going to event #${id}`);
    this.service.addParticipantEvent(this.userId, id).subscribe(
      (result) => {
        console.log(result);
        this.successmsg('Successfully added Event');
      },
      (error) => {
        console.log(error);
        this.successmsg('Successfully added Event');
      }
    );
  }
}
