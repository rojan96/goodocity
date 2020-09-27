import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  addParticipantEvent(userId, eventId) {
    return this.http.get(
      this.url + 'event/participant/' + eventId + '/' + userId
    );
  }

  addMemberCommunity(userId, communityId) {
    console.log(this.url + 'community/member/' + communityId + '/' + userId);
    return this.http.get(
      this.url + 'community/member/' + communityId + '/' + userId
    );
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
