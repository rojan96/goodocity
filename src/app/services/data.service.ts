import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private url: string, private http: HttpClient) {}

  getAll() {
    return this.http.get(this.url);
  }

  getDetail(title, id) {
    if (title == 'profile') title = 'user';

    return this.http.get(this.url + '' + title + '/' + id);
  }

  getEventByCategory(categoryId) {
    return this.http.get(this.url + '/category/' + categoryId);
  }

  getCommunityByCategory(categoryId) {
    return this.http.get(this.url + '/category/' + categoryId);
  }

  create(resource) {
    return this.http.post(this.url, JSON.stringify(resource), {
      observe: 'response',
    });
  }

  update(resource) {
    return this.http.patch(
      this.url + '/' + resource.id,
      JSON.stringify({ isRead: true })
    );
  }

  delete(id) {
    return this.http.delete(this.url + '/' + id);
  }
}
