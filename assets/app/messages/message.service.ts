import {Injectable} from "@angular/core";
import {Message} from "./message.model";
/**
 * Created by praveen on 7/29/2017.
 */
export class MessageService {
    messages:Message[] = [];
    addMessage(message:Message) {
        this.messages.push(message);
    }

    getMessages(){
        return this.messages;
    }

    deleteMessage(message:Message) {
        this.messages.splice(this.messages.indexOf(message), 1);
    }
}