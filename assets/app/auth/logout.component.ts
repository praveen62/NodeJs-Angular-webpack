import {Component} from "@angular/core";
/**
 * Created by praveen on 7/29/2017.
 */
@Component({
    selector: 'app-logout',
    templateUrl: `
        <div class="col-md-8 col-md-offset-2">
            <button class="btn btn-danger" (click)="onLogout()">Logout</button>
        </div>
    `
})
export class LogoutComponent {

    onLogout(){

    }
}