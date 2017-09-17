import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {PostService} from '../../services';
import {POST_USER} from '../../config/endpoints';

@Injectable()
export class AddUserService{
    constructor(private postService: PostService){}
    
    postUser(payload){
        return Observable.create(observer=>{
            this.postService.post(POST_USER, payload)
                            .subscribe(res=>{
                                observer.next(res);
                                observer.complete();
                            }, error=>{
                                observer.error(error);
                            })
        })
    }
}