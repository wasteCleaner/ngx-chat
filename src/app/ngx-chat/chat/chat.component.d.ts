import { OnInit, NgZone } from '@angular/core';
export declare class ChatComponent implements OnInit {
    private zone;
    chatState: string;
    timeoutSize: number;
    constructor(zone: NgZone);
    ngOnInit(): void;
    showNotification(): void;
}
