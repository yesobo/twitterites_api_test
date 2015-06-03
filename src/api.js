import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class Api{
  heading = 'API Test';
  images = [];
  last_param = 's={"id": -1}&l=1';
  myKey_param = 'apiKey=w4-9cpE__HevCb_VMd1UAlX3YvRZrBns';
  collections_locator = '/collections';
  url = 'https://api.mongolab.com/api/1/databases';
  last_saved_twitterite = '';

  constructor(http){
    this.http = http;
  }

  activate(){
  }
  
  getLastSavedTwitterite() {
    console.log('getting last saved twitter');
    return this.http.get(this.url + '/twitterites/' + this.collections_locator  + '/twitterites' + '?' + this.last_param + '&' + this.myKey_param).then(response => {
      this.last_saved_twitterite = response.content[0].id;
    });
  }
  
  getMyDatabases() {
    console.log('getting databases...');
    return this.http.get(this.url + '?' + this.myKey_param).then( (response, err) => {
      if(err) {
        console.log(err);
      } else {
        console.log(response.content);
      }
    });
  }
  
  getTwitteritesCollections() {
    console.log('getting collections...');
    return this.http.get(this.url + '/twitterites/' + this.collections_locator + '?' + this.myKey_param).then( (response, err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(response.content);
      }
    });
  }

  canDeactivate(){
    return confirm('Are you sure you want to leave?');
  }
}