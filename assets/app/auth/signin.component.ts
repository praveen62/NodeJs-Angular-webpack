/**
 * Created by praveen on 7/29/2017.
 */
import {Component, OnInit} from "@angular/core"
import {FormControl, FormGroup, Validators} from "@angular/forms";
@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit{
    myForm: FormGroup;

    onSubmit(){
        console.log(this.myForm);
        this.myForm.reset();
    }
    ngOnInit() {
        this.myForm = new FormGroup({
            'email': new FormControl(null, [Validators.required, Validators.email]),
            'password': new FormControl(null, Validators.required)
        });
    }
}