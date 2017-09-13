import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../providers/auth.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
public isloggedIn = false;
  constructor(private authservice: AuthService, private router: Router) {
    authservice.isAuthenticated()
    .subscribe(success => {
        this.isloggedIn = success
      }
    );
   }

  ngOnInit() {
   
  }
  logOut(){
    this.authservice.logout();
    this.router.navigate (['/login']);
    console.log("logout")
  }

}
