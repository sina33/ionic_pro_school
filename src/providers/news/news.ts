import { Injectable } from '@angular/core';

import { News } from "../../models/news";
import { ApiProvider } from "../api/api";

/*
  Generated class for the NewsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewsProvider {

  urlAddress: any = "http://api.jsonbin.io/b/5b129bea7a973f4ce57850f5"
  posts: any

  constructor(public api: ApiProvider) {
    console.log('Hello NewsProvider Provider');
  }

  query(params?: any) {
    return this.api.get('/item', params);
  }

  add(item: News) {
  }

  delete(item: News) {
  }

}
