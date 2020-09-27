import { Component, Input, OnInit } from '@angular/core';
import { DetailService } from '../../services/detail.service';

@Component({
  selector: 'participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css'],
})
export class ParticipantsComponent implements OnInit {
  @Input('participants') participantList;
  constructor(private service: DetailService) {}

  participantsData = [];
  ngOnInit() {
    for (let participant of this.participantList) {
      this.service.getDetail('profile', participant).subscribe((data: any) => {
        this.participantsData.push(data);
      });
    }
  }
}
