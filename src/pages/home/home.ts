import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HTTP } from "@ionic-native/http";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  dataAddress:string = "http://api.jsonbin.io/b/5b129bea7a973f4ce57850f5"
  message:string = ""

  constructor(public navCtrl: NavController, public http: HTTP) {

  }

  getData() {
    this.http.get(this.dataAddress, {}, {})
    .then(data => {
  
      console.log(data.status);
      console.log(data.data); // data received by server
      console.log(data.headers);
      this.message = data.data['message']
  
    })
    .catch(error => {
  
      console.log(error.status);
      console.log(error.error); // error message as string
      console.log(error.headers);
  
    });
}


}


