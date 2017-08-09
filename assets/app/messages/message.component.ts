/**
 * Created by praveen on 7/29/2017.
 */
import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Message} from "./message.model";
import {MessageService} from "./message.service";
@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styles: [`
        .author{
            display: inline-block;
            font-size: 12px;
            font-style: italic;
            width: 80%;
        }
        .configuration{
            display: inline-block;
            font-style: italic;
            font-size: 12px;
            width: 19%;
        }
    `]
})
export class MessageComponent {
    @Input() message: Message;
    @Output() editClicked = new EventEmitter<string>();
    constructor(private messageService: MessageService){}
    onEdit() {
        this.editClicked.emit('A new value to the message');
    }
    onDelete(){
            this.messageService.deleteMessage(this.message);
    }
}