import { Component } from '@angular/core';

@Component({
  selector: 'app-login-layout',
  template: `
    <app-header></app-header>
    <app-alert></app-alert>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
  styles: []
})
export class LoginLayoutComponent {}