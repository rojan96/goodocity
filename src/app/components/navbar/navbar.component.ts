import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SearchService } from '../../services/search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  searchQuery = new FormGroup({
    search: new FormControl(),
  });
  constructor(private service: SearchService, private router: Router) {}

  searchItem() {
    let keyword = this.searchQuery.get('search').value;
    console.log(keyword);
    this.router.navigate(['dashboard/event/search/' + keyword]);
  }
}
