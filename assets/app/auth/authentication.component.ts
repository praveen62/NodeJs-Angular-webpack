import {Component} from "@angular/core";
/**
 * Created by praveen on 7/29/2017.
 */
@Component({
    selector: "app-authentication",
    templateUrl: `
        <header class="row spacing">
            <nav class="col-md-8 col-md-offset-2">
            <ul class="nav nav-tabs">
                <li routerLinkActive="active"><a [routerLink]="['signup']">Signup</a></li>
            <li routerLinkActive="active"><a [routerLink]="['signin']">Signin</a></li>
            <li routerLinkActive="active"><a [routerLink]="['logout']">Logout</a></li>
</ul>            
</nav>     
</header>
<div class="row spacing">
<router-outlet></router-outlet>
</div>
    `
})
export class AuthenticationComponent {

}