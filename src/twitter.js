import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class Flickr{
  heading = 'Twitterites';
  images = [];
  url = 'http://localhost:3000'

  constructor(http){
    this.http = http;
  }

  activate(){
    return this.http.get(this.url).then(response => {
      this.favs = response.content.slice(0, 10);
    });
  }

  canDeactivate(){
    return confirm('Are you sure you want to leave?');
  }
}
