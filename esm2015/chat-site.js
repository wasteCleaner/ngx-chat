import { Injectable, Component, NgZone, NgModule } from '@angular/core';
import { trigger, state, animate, style, transition } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ChatService {
    constructor() { }
}
ChatService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ChatService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ChatComponent {
    /**
     * @param {?} zone
     */
    constructor(zone) {
        this.zone = zone;
        this.chatState = 'inactive';
        this.timeoutSize = 2000;
        if (this.chatState === 'inactive')
            setTimeout(() => this.showNotification(), this.timeoutSize);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    showNotification() {
        this.chatState = 'active';
    }
}
ChatComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-chat',
                template: `<div class="ngx-chat" [@moveInLeft]="chatState">
  <app-chat-notification></app-chat-notification>
</div>`,
                animations: [trigger('moveInLeft', [
                        state('inactive', style({
                            opacity: 0,
                            transform: 'translateX(100%)'
                        })),
                        state('active', style({
                            opacity: 1,
                            transform: 'translateX(0)'
                        })),
                        transition('inactive => active', animate('300ms ease-in')),
                        transition('active => inactive', animate('300ms ease-out'))
                    ])],
                host: { '[@moveInLeft]': '' }
            },] },
];
/** @nocollapse */
ChatComponent.ctorParameters = () => [
    { type: NgZone, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ChatNotificationComponent {
    constructor() {
        this.userProfile = {
            photo: './assets/images/steve.png',
            name: 'Steve Jobs',
            status: 'entrepreneur, business magnate, inventor...'
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ChatNotificationComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-chat-notification',
                template: `<div class="ngx-notification">
  <div class="user-avatar" [ngStyle]="{'background-image': 'url(' + userProfile.photo + ')'}"></div>
  <div class="user-profile">
    <div class="user-profile__name">{{userProfile.name}}</div>
    <div class="user-profile__status">{{userProfile.status}}</div>
  </div>
</div>`
            },] },
];
/** @nocollapse */
ChatNotificationComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NgxChatModule {
}
NgxChatModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    BrowserAnimationsModule
                ],
                providers: [ChatService],
                declarations: [ChatComponent, ChatNotificationComponent],
                exports: [ChatComponent]
            },] },
];
/** @nocollapse */
NgxChatModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { NgxChatModule, ChatNotificationComponent as ɵc, ChatComponent as ɵb, ChatService as ɵa };
//# sourceMappingURL=chat-site.js.map
