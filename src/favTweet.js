import {customElement, bindable} from 'aurelia-framework';

@customElement('fav-tweet')
export class FavTweet {
  @bindable model;

  constructor() {
    this.isSelected = false;
    this.selectedClass = '';
  }

  switchSelect() {
    this.selectedClass = this.selectedClass==='selected'?'':'selected';
    this.isSelected = !this.isSelected;
  }
}
