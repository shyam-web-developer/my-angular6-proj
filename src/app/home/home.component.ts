import { Component, OnInit } from '@angular/core';

import { AuthService } from '../_services/authService.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    returnUrl: string;
    public showContent: boolean = false;
    constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService) {
        route.url.subscribe(() => {
           authService.canDeactivate(route) ; // any time url changes, this callback is fired
          });
     }

    ngOnInit() {
        //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        //setTimeout(() => this.showContent = true, 200);
    }

    logout(): void {
        console.log("Logout");
        this.authService.logout();
        this.router.navigate(['/login']);
    }

    canDeactivate() {
        return false;
      }
}

