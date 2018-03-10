import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ChatService } from './services/chat.service';
import { ChatComponent } from './chat/chat.component';
import { ChatNotificationComponent } from './chat-notification/chat-notification.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  providers: [ChatService],
  declarations: [ChatComponent, ChatNotificationComponent],
  exports: [ChatComponent]
})
export class NgxChatModule { }
