import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// import { Router, RouterModule,NavigationEnd } from '@angular/router';
// import { AuthHttp, AuthConfig , JwtHelper } from 'angular2-jwt';
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
        //    const headers = new Headers({'Authorization': 'JWT ' + username});
        headers.append('Content-Type', 'application/json');
        //return this.http.get(Config.api+'data_against_zipcode/'+id+'?page='+page).map((response: Response) => response.json());
        // return this._http5.post(Config.api+'user-token-auth/',
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


    // login_authenticate(username: string, password: string) {
    //     return this._http5.post(Config.api + 'login/', {
    //         'username': username,
    //        // 'password': password
    //     }).map((res: Response) => res.json())
    // }usersignin



    login_authenticate(username: string, password: string) {
        return this._http5.post(Config.api + 'loginCompany/', {
            'username': username,
            'password': password,
            // 'title': title
        }).map((res: Response) => res.json())
    }



    // post_service(obj) {

    //     // console.log('service');
    //     // console.log(obj);

    //     return this._http5.post(Config.api + "signup1/", {
    //         'obj': obj
    //     }).map((res: Response) => res.json());

    // }
    // activation_service(email) {
    //     console.log(email);
    //     return this._http5.post(Config.api + "authenticade_code/", {
    //         'email': email
    //     }).map((res: Response) => res.json())
    // }

    // authenticate_service(uid) {
    //     let headers = new Headers();
    //     headers.append('Content-Type', 'application/json');
    //     return this._http5.get(Config.api + 'signup1/' + uid,
    //         { headers: headers }).map((response: Response) => response.json());

    // }
    // forget_password(email) {

    //     return this._http5.post(Config.api + 'forget_password/', {
    //         'email': email
    //     }).map((res: Response) => res.json())


    // }
    // change_password(pass1, pass2, code) {
    //     return this._http5.post(Config.api + 'change_password/', {
    //         'pass1': pass1,
    //         'pass2': pass2,
    //         'code': code,
    //     }).map((res: Response) => res.json())
    // }

    activate(uid) {
        console.log(uid)
        let headers = new Headers();
        return this._http5.get(Config.api + 'activate/' + uid, { headers: headers }).map((response: Response) => response.json());
        // return this.http.get('http://192.168.30.52:9000/choice/zipcodedata/'+id+'?page='+page).map((response: Response) => response.json());
    }
    isactivated(username) {
        console.log(username)
        return this._http5.get(Config.api + 'isactivated/' + username).map((response: Response) => response.json());
        // return this.http.get('http://192.168.30.52:9000/choice/zipcodedata/'+id+'?page='+page).map((response: Response) => response.json());
    }
}