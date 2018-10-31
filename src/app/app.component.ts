import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
  public showContent: boolean = false;
  constructor() { }
  ngOnInit() {
    //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    //setTimeout(() => this.showContent = true, 200);    
  }
}
