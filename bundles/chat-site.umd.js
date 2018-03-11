(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/animations'), require('@angular/common'), require('@angular/platform-browser/animations')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/animations', '@angular/common', '@angular/platform-browser/animations'], factory) :
	(factory((global['chat-site'] = {}),global.ng.core,global.ng.animations,global.ng.common,global.ng.platformBrowser.animations));
}(this, (function (exports,core,animations,common,animations$1) { 'use strict';

var ChatService = /** @class */ (function () {
    function ChatService() {
    }
    return ChatService;
}());
ChatService.decorators = [
    { type: core.Injectable },
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
    { type: core.Component, args: [{
                selector: 'ngx-chat',
                template: "<div class=\"ngx-chat\" [@moveInLeft]=\"chatState\">\n  <app-chat-notification></app-chat-notification>\n</div>",
                animations: [animations.trigger('moveInLeft', [
                        animations.state('inactive', animations.style({
                            opacity: 0,
                            transform: 'translateX(100%)'
                        })),
                        animations.state('active', animations.style({
                            opacity: 1,
                            transform: 'translateX(0)'
                        })),
                        animations.transition('inactive => active', animations.animate('300ms ease-in')),
                        animations.transition('active => inactive', animations.animate('300ms ease-out'))
                    ])],
                host: { '[@moveInLeft]': '' }
            },] },
];
ChatComponent.ctorParameters = function () { return [
    { type: core.NgZone, },
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
    { type: core.Component, args: [{
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
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule,
                    animations$1.BrowserAnimationsModule
                ],
                providers: [ChatService],
                declarations: [ChatComponent, ChatNotificationComponent],
                exports: [ChatComponent]
            },] },
];
NgxChatModule.ctorParameters = function () { return []; };

exports.NgxChatModule = NgxChatModule;
exports.ɵc = ChatNotificationComponent;
exports.ɵb = ChatComponent;
exports.ɵa = ChatService;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=chat-site.umd.js.map
