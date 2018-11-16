import { Component } from '@angular/core';
import { AuthService } from './../_services';
@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styles: ['./home-layout.component.css']
})
export class HomeLayoutComponent {

  constructor(private authService: AuthService) {
    
  }

  onLogout() {    
    this.authService.logout();
  }
}