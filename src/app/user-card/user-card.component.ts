import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProps } from './user-card.types';

import { ButtonComponent } from '../components/button/button.component';

@Component({
  selector: 'app-user-card',
  imports: [ButtonComponent, CommonModule],
  standalone: true,
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  //the ! tells typescript that the props will arrive from outside this file
  @Input() user!: UserProps;
}
