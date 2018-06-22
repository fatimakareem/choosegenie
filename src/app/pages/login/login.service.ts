import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import { NgForm } from "@angular/forms";
import { Config } from '../../Config';
//import { HttpService } from './../serv/http-service';
@Injectable()
export class LoginService {

    constructor(private _http5: Http) { }
    hel: any = [];
    tit: any = [];
    word;
    loaded: boolean = false;
    currentUser;
    login(username: string, password: string) {
        const headers = new Headers();
      
        headers.append('Content-Type', 'application/json');
       
        return this._http5.post(Config.api + 'loginCompany/',
            JSON.stringify({ username: username, password: password }), { headers: headers })
            .map((response: Response) => {
                console.log(response.json()['Results']);
                this.hel = response.json()['Results'];
                console.log(this.hel);
                this.tit = this.hel[0];
                console.log(this.tit);
                this.word = this.tit.title;
                console.log(this.word);
                localStorage.setItem('user', this.word);
                localStorage.setItem('username', this.word.split(' ', 3000)[1]);

                let user = { username: username, token: response.json().token };

                if (user && user.token) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    // console.log ("junaid",localStorage.getItem('currentUser'))
                }
            });
    }


    login_authenticate(username: string, password: string) {
        return this._http5.post(Config.api + 'loginCompany/', {
            'username': username,
            'password': password,
            // 'title': title
        }).map((res: Response) => res.json())
    }

    activate(uid) {
        console.log(uid)
        let headers = new Headers();
        return this._http5.get(Config.api + 'activate/' + uid, { headers: headers }).map((response: Response) => response.json());
       
    }
    isactivated(username) {
        console.log(username)
        return this._http5.get(Config.api + 'isactivated/' + username).map((response: Response) => response.json());
       
    }
}