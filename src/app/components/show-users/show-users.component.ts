import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {ShowUsersService} from './show-users.service';
@Component({
    selector: 'show-users',
    templateUrl: './show-users.component.html',
    encapsulation:ViewEncapsulation.None,
    styleUrls:['./show-users.component.css']
})

export class ShowUsersComponent  implements OnInit {

    private failMessage: boolean = false;
    private users:Object[]=[];
    private showLoader:boolean = false;

    constructor(private showUsersService: ShowUsersService) {}

    ngOnInit() {
        this.getUsers();
    }

    private getUsers():void{
        this.showLoader = true;
        this.showUsersService.getUsers().subscribe(res=>{
            this.users = res.users;
            this.showLoader = false;
        }, error=>{
            this.failMessage=true;
            this.showLoader = false;
        })
    }
}