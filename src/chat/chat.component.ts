import { Component, OnInit, NgZone } from '@angular/core';
import { trigger, state, animate, style, transition } from '@angular/animations';

@Component({
  selector: 'ngx-chat',
  templateUrl: './chat.component.html',
  animations: [moveInLeft()],
  host: {'[@moveInLeft]': ''}
})
export class ChatComponent implements OnInit {
  chatState = 'inactive';
  timeoutSize = 2000;
  constructor(private zone: NgZone) {
    if (this.chatState === 'inactive') setTimeout(() => this.showNotification(), this.timeoutSize);
  }

  ngOnInit() {

  }

  showNotification() {
    this.chatState = 'active';
  }

}

export function moveInLeft() {
  return trigger('moveInLeft', [
    state('inactive', style({
      opacity: 0,
      transform: 'translateX(100%)'
    })),
    state('active',   style({
      opacity: 1,
      transform: 'translateX(0)'
    })),
    transition('inactive => active', animate('300ms ease-in')),
    transition('active => inactive', animate('300ms ease-out'))
  ]);
}