import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';

@Injectable()
export class SearchService extends DataService {
  constructor(http: HttpClient) {
    super('https://goodocity.uc.r.appspot.com/events/search', http);
  }
}
