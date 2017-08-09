/**
 * Created by praveen on 7/29/2017.
 */
export class Message{
    content: string;
    username: string;
    messageId?: string;
    userid?: string;

    constructor(content: string, username: string, messageId?: string, userid?: string){
        this.content = content;
        this.username = username;
        this.messageId = messageId;
        this.userid = userid;
    }
}