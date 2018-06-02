import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { HttpClientModule } from "@angular/common/http";

/*
  Generated class for the NewsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewsProvider {

  urlAddress: any = "http://api.jsonbin.io/b/5b129bea7a973f4ce57850f5"
  posts: any

  constructor(public http: HttpClient
    // , private httpClient: HttpClientModule) {
  ){
    console.log('Hello NewsProvider Provider');
  }

  // getData() {
  //   this.httpClient.get(this.urlAddress).subscribe(res => {
  //     this.posts = res
  //   })
  // }

// this.http.get('http://ionic.io', {}, {})
//   .then(data => {

//     console.log(data.status);
//     console.log(data.data); // data received by server
//     console.log(data.headers);

//   })
//   .catch(error => {

//     console.log(error.status);
//     console.log(error.error); // error message as string
//     console.log(error.headers);

//   });

}
