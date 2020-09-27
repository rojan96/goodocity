import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
})
export class ToastComponent implements OnInit {
  constructor(private toastr: ToastrService) {}

  ngOnInit() {}
  successmsg() {
    this.toastr.success('Toastr Success message', 'Success');
  }
  errorsmsg() {
    this.toastr.error('Toastr Error Notification', 'Error');
  }
  infotoastr() {
    this.toastr.info('Important News', 'Information');
  }
  toastrwaring() {
    this.toastr.warning('Battery about to Die', 'Warning');
  }
}
