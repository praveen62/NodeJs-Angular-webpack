import {Component, OnInit} from "@angular/core";
import {Message} from "./message.model";
import {MessageService} from "./message.service";
/**
 * Created by praveen on 7/29/2017.
 */

@Component({
    selector: 'app-message-list',
    template: `
        <div class="col-md-8 colmd-ofset-2">
        <app-message [message]="message"
                     (editClicked)="message.content= $event"
                     *ngFor="let message of messages"></app-message>
        </div>
    `
})
export class  MessageListComponent implements OnInit{
    messages: Message[];

    constructor(private messageService: MessageService){}
    ngOnInit(){
        this.messages = this.messageService.getMessages();
    }

}