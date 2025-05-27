import { Component, Input, Output, EventEmitter } from '@angular/core';
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

  //This emits the event to the parent component so that it can update the user after the click
  @Output() updateUser = new EventEmitter<void>() 
  //this catches the onClick event from the child component
  clicked(){
    this.updateUser.emit();
  }
}
