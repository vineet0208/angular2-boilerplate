import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class PostService{
    constructor(private http: Http){}
    
    post(url, data){
        let payload = JSON.stringify(data),
            headers = new Headers({'Content-Type':'application/json'}),
            options = new RequestOptions({headers: headers});
        return this.http.post(url, payload, options)
                        .map((res: Response)=>{
                            let response=res.json();
                            return response;
                        })
                        .catch((error:any)=>{
                            return Observable.throw(error.json() || 'Server Error')
                        });
    }
}