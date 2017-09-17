import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {GetService} from '../../services';
import {GET_USERS} from '../../config/endpoints';

@Injectable()
export class ShowUsersService{
    constructor(private getService: GetService){}
    
    getUsers(){
        return Observable.create(observer=>{
            this.getService.get(GET_USERS)
                            .subscribe(res=>{
                                observer.next(res);
                                observer.complete();
                            }, error=>{
                                observer.error(error);
                            })
        })
    }
}