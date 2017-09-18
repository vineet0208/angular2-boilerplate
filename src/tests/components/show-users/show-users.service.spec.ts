import {TestBed, async, inject} from '@angular/core/testing';
import {ShowUsersService} from '../../../app/components';
import {GetService} from '../../../app/services';
import {Observable} from 'rxjs/Rx';

describe('ShowUsersService', ()=>{
    let error = false;
    let getService = {
        response:{
                    "users":[
                        {
                            "name":"Ric",
                            "ssn": 1224354,
                            "dateOfBirth":"2011-06-01T18:30:00.000Z"
                        }
                    ]
                },
        get: function(){
            let err = error,
                res = this.response;
            return Observable.create(observer => {
                if (err) {
                    observer.error({message:'server error'})
                } else {
                    observer.next(res);
                }
                observer.complete();
            })
        }
    }

    beforeEach(()=>{
        TestBed.configureTestingModule({
            providers: [
                {provide: GetService, useValue: getService},
                ShowUsersService
            ]
        })
    })

    it('show test getUsers success', inject([ShowUsersService], (showUsersService)=>{
        showUsersService.getUsers().subscribe(res=>{
                expect(res.users.length).toEqual(1);
            }, error=>{
        });
    }));

    it('show test getUsers fail', inject([ShowUsersService], (showUsersService)=>{
        error=true;
        showUsersService.getUsers().subscribe(res=>{            
            }, error=>{
                expect(error.message).toEqual('server error');
        });
    }));
    
});