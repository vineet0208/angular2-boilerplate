import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AddUserService} from './add-user.service';
@Component({
    selector: 'add-user',
    templateUrl: './add-user.component.html',
    encapsulation:ViewEncapsulation.None,
    styleUrls:['./add-user.component.css']
})

export class AddUserComponent  implements OnInit {
    addNameForm: FormGroup;
    private successMessage:boolean = false;
    private failMessage:boolean = false;
    private showLoader:boolean = false;

    constructor(private formBuilder: FormBuilder, 
                private addUserService: AddUserService) {}

    ngOnInit() {
        this.initializeForm();
        this.setStatusFlags();
    }

    private initializeForm():void{
        this.addNameForm = this.formBuilder.group({
            name: ['', [Validators.required,  Validators.minLength(5)]],
            ssn: ['', Validators.required],
            date:[void 0, Validators.required]
        });
    }

    private setStatusFlags():void{
        this.addNameForm.valueChanges.subscribe(form => {
            this.successMessage = this.failMessage = false;
        });
    }

    private submit():void{
        let payload = this.addNameForm.value;
        this.showLoader = true;
        this.addUserService.postUser(payload).subscribe(res=>{
            this.successMessage=true;
            this.showLoader = false;
        }, error=>{
            this.failMessage=true;
            this.showLoader = false;
        })
    }
}