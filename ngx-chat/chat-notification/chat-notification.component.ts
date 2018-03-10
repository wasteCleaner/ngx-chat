import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-notification',
  templateUrl: './chat-notification.component.html'
})
export class ChatNotificationComponent implements OnInit {
  userProfile = {
    photo: './assets/images/steve.png',
    name: 'Steve Jobs',
    status: 'entrepreneur, business magnate, inventor...'
  }


  constructor() {

  }

  ngOnInit() {

  }



}
