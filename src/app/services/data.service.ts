import { Injectable } from '@angular/core'
import { Subject, Observable } from 'rxjs/RX'
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { async } from '@angular/core/testing';
import 'rxjs/Rx';

@Injectable()
export class DataService {
    constructor(private http: Http) {
        this.loading = false;
    }
    apiRoot = "http://localhost:3000";
    loading: boolean;

    private handleError(err: Response) {
        return Observable.throw(err.statusText);
    }

    ////////    PRODUCTS    //////////
    //  TODO: create a Product model and use that instead of any
    getAllProducts(): Observable<any[]> {
        return this.http.get(this.apiRoot + '/store').map((res: Response) => {
            return <any[]>res.json();
        }).catch(this.handleError);
    }

    getProduct(id: string): Observable<any> {
        return this.http.get(this.apiRoot + '/product/' + id).map((res: Response) => {
            return <any>res.json();
        }).catch(this.handleError);
    }

    /////////////////////////////////


    ////////      EVENTS    ////////
    getAllEvents(): Observable<any[]> {
        return this.http.get(this.apiRoot + '/events').map((res: Response) => {
            return <any[]>res.json();
        }).catch(this.handleError);
    }

    getEvent(id: string): Observable<any> {
        return this.http.get(this.apiRoot + '/event/' + id).map((res: Response) => {
            return <any>res.json();
        }).catch(this.handleError);
    }


    ///////////////////////////////



    //////  BLOG        ///////////
    getAllPosts(): Observable<any[]> {
        return this.http.get(this.apiRoot + '/blog').map((res: Response) => {
            return <any[]>res.json();
        }).catch(this.handleError);
    }

    getPost(id: string): Observable<any> {
        return this.http.get(this.apiRoot + '/blog/post/' + id).map((res: Response) => {
            return <any>res.json();
        }).catch(this.handleError);
    }

    /////////////////////////////

}

