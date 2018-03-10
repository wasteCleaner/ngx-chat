import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ChatComponent } from './chat/chat.component';
import { ChatNotificationComponent } from './chat-notification/chat-notification.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  declarations: [ChatComponent, ChatNotificationComponent],
  exports: [ChatComponent]
})
export class NgxChatModule { }
