import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  @Input('type') type;
  constructor(private service: CategoryService, private route: Router) {}
  categories: any;
  ngOnInit() {
    this.service.getAll().subscribe((data) => {
      this.categories = data;
    });
  }

  newCategory(id) {
    console.log(id);
    this.route.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    if (this.type == 'event') this.route.navigate(['dashboard/events/' + id]);
    else this.route.navigate(['dashboard/communities/' + id]);
  }
}
