import { Injectable } from '@angular/core'
import { Subject, Observable } from 'rxjs/RX'
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { async } from '@angular/core/testing';

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
                    var results: Object[] = JSON.parse(res._body);
                    return resolve(results.products);
                },
                err => {
                    reject(err);
                });
        });
        return promise;
    }

    getProduct(id: string): any {
        let promise = new Promise((resolve, reject) => {
            let url = this.apiRoot + '/product/' + id
            this.http.get(url)
                .toPromise()
                .then(res => {
                    var data: Object = JSON.parse(res._body);
                    return resolve(data.data.product);
                },
                err => {
                    reject(err)
                });
        });
        return promise;
    }
}

