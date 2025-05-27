import { Component } from '@angular/core';
import { UserCardComponent } from './user-card/user-card.component';
import { RouterOutlet } from '@angular/router';
import { UserProps, UserRole } from './user-card/user-card.types';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserCardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-demo';
  
  currentUser:UserProps = {
    userName: 'Elia22',
    role: UserRole.Admin,
    imgUrl: 'assets/img/persona1.jpg' 
  }
}
