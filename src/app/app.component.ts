import { Component } from '@angular/core';
import { User } from './models/user';
import { userInfo } from 'os';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ang-app';
  user: User;

  ngOnint(){
      this.user.firstName = 'sdfsdfds';
  }

}
