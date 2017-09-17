import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class GetService{
    constructor(private http: Http){}
    
    get(url, params?){
        return this.http.get(url, {search: params})
                        .map((res: Response)=>{
                            let response=res.json();
                            return response;
                        })
                        .catch((error:any)=>{
                            return Observable.throw(error.json() || 'Server Error')
                        });
    }
}