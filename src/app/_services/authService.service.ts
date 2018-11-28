import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { Subject } from "rxjs";
import { map } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'No-Auth': 'True'
    })
};
@Injectable()
export class AuthService {
    /* private loggedIn = new BehaviorSubject<boolean>(false); // {1}
    get isLoggedIn() {
      return this.loggedIn.asObservable(); // {2}
    } */

    tokenUrl = environment.tokenUrl;
    private loggedIn = new Subject<boolean>();
    loggedIn$ = this.loggedIn.asObservable();

    constructor(private http: HttpClient, private router: Router) { }

    login(username: string, password: string) {
        var userData = "grant_type=password&username=" + username + "&password=" + password;
        return this.http.post(this.tokenUrl, userData, httpOptions).pipe(map((res) => {
            this.loggedIn.next(true);
            return res;
        }));
    }

    logout() {
        // remove user from local storage to log user out
        console.log("Logout");
        localStorage.setItem('isLoggedIn', "false");
        localStorage.removeItem('currentUser');
        this.loggedIn.next(false);
        this.router.navigate(['/login']);
    }

    public isLoggedIn(): boolean {
        let status = false;
        if (localStorage.getItem('isLoggedIn') == "true") {
            status = true;
        }
        else {
            status = false;
        }
        return status;
    }

    canDeactivate(route): void {
        if (this.isLoggedIn()) {
            if (confirm("Do you want to logout!")) {
                console.log("Logout");
                localStorage.setItem('isLoggedIn', "false");
                localStorage.removeItem('currentUser');
                this.loggedIn.next(false);
                this.router.navigate([route._routerState.snapshot.url]);
            }
        }
    }

    clearLocalStorage() {
        // remove user from local storage to log user out
        console.log("Logout");
        localStorage.setItem('isLoggedIn', "false");
        localStorage.removeItem('currentUser');
        this.loggedIn.next(false);        
    }
}