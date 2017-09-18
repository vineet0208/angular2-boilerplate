import {TestBed, ComponentFixture, async} from '@angular/core/testing';
import {ShowUsersComponent, ShowUsersService} from '../../../app/components';
import {LoaderComponent} from '../../../app/common';
import {Observable} from 'rxjs/Rx';

describe('ShowUsersComponent', ()=>{
    let comp, instance;
    let error = false;
    let showUsersService = {
        response:{
                    "users":[
                        {
                            "name":"Ric",
                            "ssn": 1224354,
                            "dateOfBirth":"2011-06-01T18:30:00.000Z"
                        }
                    ]
                },
        getUsers: function(){
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
    beforeEach(async(()=>{
        TestBed.configureTestingModule({
            declarations:[
                ShowUsersComponent,
                LoaderComponent
            ],
            providers:[{provide:ShowUsersService, useValue:showUsersService}]
        })
    }))
    beforeEach(()=>{
        comp=TestBed.createComponent(ShowUsersComponent);
        instance=comp.debugElement.componentInstance;
    })
    it('should create ShowUsersComponent', async()=>{
        comp.detectChanges();
        expect(instance).toBeTruthy;
    })

    it('should test getUsers success case', async()=>{
        instance.getUsers().subscribe(res=>{
                expect(res.users.length).toEqual(1);
            }, error=>{
        });
    })

    it('should test getUsers failure case', async()=>{
        error = true;
        instance.getUsers().subscribe(res=>{            
            }, error=>{
                expect(error.message).toEqual('server error');
        });
    })
})