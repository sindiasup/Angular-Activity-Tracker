import { Component } from '@angular/core';
import { Activity } from './activity.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'top';
  items : Activity[] = [];
  activity = '' ;

  addAct() {
    this.items.push({name: this.activity, selected: false})
    this.activity = '';
  }

  clearAct() {
    this.activity = '';
    this.items = [];
  }

}
