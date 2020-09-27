import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-communities',
  templateUrl: './communities.component.html',
  styleUrls: ['./communities.component.css'],
})
export class CommunitiesComponent implements OnInit {
  communities = [
    {
      title: 'Recyclers',
      image:
        'https://images.unsplash.com/photo-1544928147-79a2dbc1f389?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      description: 'People going to recycle',
    },
    {
      title: 'Tutors',
      image:
        'https://images.unsplash.com/photo-1544928147-79a2dbc1f389?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      description: 'People going to recycle',
    },
    {
      title: 'Cleaners',
      image:
        'https://images.unsplash.com/photo-1544928147-79a2dbc1f389?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      description: 'People going to recycle',
    },
    {
      title: 'Recycling',
      image:
        'https://images.unsplash.com/photo-1544928147-79a2dbc1f389?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      description: 'People going to recycle',
    },
    {
      title: 'Tutoring',
      image:
        'https://images.unsplash.com/photo-1544928147-79a2dbc1f389?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      description: 'People going to recycle',
    },
    {
      title: 'Cleaning',
      image:
        'https://images.unsplash.com/photo-1544928147-79a2dbc1f389?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      description: 'People going to recycle',
    },
    {
      title: 'Recycling',
      image:
        'https://images.unsplash.com/photo-1544928147-79a2dbc1f389?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      description: 'People going to recycle',
    },
    {
      title: 'Tutoring',
      image:
        'https://images.unsplash.com/photo-1544928147-79a2dbc1f389?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      description: 'People going to recycle',
    },
    {
      title: 'Cleaning',
      image:
        'https://images.unsplash.com/photo-1544928147-79a2dbc1f389?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      description: 'People going to recycle',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
