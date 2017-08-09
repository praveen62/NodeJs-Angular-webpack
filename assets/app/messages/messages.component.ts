import {Component} from "@angular/core";
/**
 * Created by praveen on 7/29/2017.
 */
@Component({
    selector: 'app-messages',
    templateUrl: `
        <div class="row">

            <app-message-input></app-message-input>

    </div>
    <hr>
    <div class="row">
            <app-message-list></app-message-list>

    </div>
    `
})
export class MessagesComponent {

}