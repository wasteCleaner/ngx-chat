import { Injectable, Component, NgZone, NgModule } from '@angular/core';
import { trigger, state, animate, style, transition } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

var ChatService = /** @class */ (function () {
    function ChatService() {
    }
    return ChatService;
}());
ChatService.decorators = [
    { type: Injectable },
];
ChatService.ctorParameters = function () { return []; };
var ChatComponent = /** @class */ (function () {
    function ChatComponent(zone) {
        var _this = this;
        this.zone = zone;
        this.chatState = 'inactive';
        this.timeoutSize = 2000;
        if (this.chatState === 'inactive')
            setTimeout(function () { return _this.showNotification(); }, this.timeoutSize);
    }
    ChatComponent.prototype.ngOnInit = function () {
    };
    ChatComponent.prototype.showNotification = function () {
        this.chatState = 'active';
    };
    return ChatComponent;
}());
ChatComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-chat',
                template: "<div class=\"ngx-chat\" [@moveInLeft]=\"chatState\">\n  <app-chat-notification></app-chat-notification>\n</div>",
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
ChatComponent.ctorParameters = function () { return [
    { type: NgZone, },
]; };
var ChatNotificationComponent = /** @class */ (function () {
    function ChatNotificationComponent() {
        this.userProfile = {
            photo: './assets/images/steve.png',
            name: 'Steve Jobs',
            status: 'entrepreneur, business magnate, inventor...'
        };
    }
    ChatNotificationComponent.prototype.ngOnInit = function () {
    };
    return ChatNotificationComponent;
}());
ChatNotificationComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-chat-notification',
                template: "<div class=\"ngx-notification\">\n  <div class=\"user-avatar\" [ngStyle]=\"{'background-image': 'url(' + userProfile.photo + ')'}\"></div>\n  <div class=\"user-profile\">\n    <div class=\"user-profile__name\">{{userProfile.name}}</div>\n    <div class=\"user-profile__status\">{{userProfile.status}}</div>\n  </div>\n</div>"
            },] },
];
ChatNotificationComponent.ctorParameters = function () { return []; };
var NgxChatModule = /** @class */ (function () {
    function NgxChatModule() {
    }
    return NgxChatModule;
}());
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
NgxChatModule.ctorParameters = function () { return []; };

export { NgxChatModule, ChatNotificationComponent as ɵc, ChatComponent as ɵb, ChatService as ɵa };
//# sourceMappingURL=chat-site.js.map
