import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Us Time Zone Display';
  time = new Date();
  lastTimeZone = null;

  getDateZone(timeZone){
    this.time = new Date();
    if (timeZone === 'MST'){
      this.time.setHours(this.time.getHours()+1);
    } else if (timeZone === 'CST'){
      this.time.setHours(this.time.getHours() +2);
    } else if (timeZone === 'EST'){
      this.time.setHours(this.time.getHours()+3);
    }
    this.lastTimeZone = timeZone;
  }


}
