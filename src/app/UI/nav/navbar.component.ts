import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AFService } from '../../_services/af.service';
import { Observable } from 'rxjs/Observable';
import { Router } from "@angular/router";
import * as firebase from 'firebase/app';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.html',
  providers: [ AFService ]
})

export class NavBarComponent {
  navx ='<sign-up></sign-up>';  
  loggedIn : boolean;
  user: firebase.User;
  constructor(public afService : AFService, private router: Router) {
    this.afService.getUser().subscribe(
      (auth) => {
        this.user = auth;
        if (auth != null) this.loggedIn = true;
        else this.loggedIn = false;        
      });  
  }
  
  // call auth service to logout
  login() : firebase.Promise<any> {
    return this.afService.loginWithGoogle(); 
  }

  // call auth service to logout
  logout() : firebase.Promise<any> {
    return this.afService.logout();
  }

}
