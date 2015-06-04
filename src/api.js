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
  my_server_url = 'http://localhost:3000';
  last_saved_twitterite = '';
  backup_message = '';

  constructor(http){
    this.http = http;
  }

  activate(){
  }

  getLastSavedTwitterite() {
    console.log('getting last saved twitter');
    return requestLastSavedTwitterite.then(response => {
      this.last_saved_twitterite = response.content[0].id;
    });
  }

  requestLastSavedTwitterite() {
    console.log('requesting from Twitter');
    return this.http.get(this.url + '/twitterites/' + this.collections_locator  + '/twitterites' + '?' + this.last_param + '&' + this.myKey_param);
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

  getTwitteritesNotSaved() {
    console.log('getting last tweets from twitter');
    return this.requestLastSavedTwitterite().then( (response) => {
      var last_saved_id = response.content[0].id.toString();
      var last_saved_id_last_char = Number(last_saved_id.slice(-1));
      last_saved_id_last_char++;
      last_saved_id = (last_saved_id.slice(0,-1) + last_saved_id_last_char);
      this.http.get(this.my_server_url + '/favorites/' + last_saved_id)
      .then( (response, err) => {
        if (err) {
          console.log(err);
        } else {
          this.backup_message = 'Your have ' + response.content[0].length + ' twitterites not saved';
        }
      });
    });
  }

  canDeactivate(){
    return confirm('Are you sure you want to leave?');
  }
}
