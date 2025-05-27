import { Component, Input } from '@angular/core';
import { UserProps } from './user-card.types';

@Component({
  selector: 'app-user-card',
  imports: [],
  standalone: true,
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  //the ! tells typescript that the props will arrive from outside this file
  @Input() user!: UserProps;
}
