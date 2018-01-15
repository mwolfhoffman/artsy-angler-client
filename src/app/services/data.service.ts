import { Injectable } from '@angular/core'
import { Subject, Observable } from 'rxjs/RX'
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';

@Injectable()
export class DataService {
    constructor(private http: Http) {
        this.loading = false;
    }
    apiRoot = "http://localhost:3000";
    loading: boolean;


    getAllProducts(): any {
        let promise = new Promise((resolve, reject) => {
            this.http.get(this.apiRoot + '/store')
                .toPromise()
                .then(res => {
                    var results:Object[] =JSON.parse(res._body);
                  return resolve(results.products);
                },
                err => {
                    reject(err);
                });
        });
        return promise;
    }

}