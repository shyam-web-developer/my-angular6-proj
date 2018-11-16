import { Component, OnInit,ViewChild, ElementRef} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthService } from '../_services/authService.service';
import { AlertService } from '../_services';

@Component({
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    @ViewChild("username") userField: ElementRef;
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthService,      
        private alertService: AlertService) {           
         }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // reset login status
        //this.authService.logout();

        // get return url from route parameters or default to '/'
        // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.returnUrl = '/dashboard';     
        this.userField.nativeElement.focus();   
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    console.log("Login successful");
                    localStorage.setItem('isLoggedIn', "true");
                    localStorage.setItem('currentUser', JSON.stringify(data));
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    let err = error.error.error_description || error.error.message;
                    this.alertService.error(err);
                    this.loading = false;
                });
    }
}
