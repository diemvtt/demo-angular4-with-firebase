import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {
  user = null;
  error: any;
  
  constructor(private authService: AuthService, private router: Router) {
   }

  ngOnInit() {
  }

  signInWithFacebook() {
    this.authService.signInWithFacebook()
    .then((res) => {
      this.router.navigate(['dashboard'])
    })
    .catch((err) => console.log(err));
  }

  signInWithGoogle() {
    this.authService.signInWithGoogle()
    .then((res) => {
      this.router.navigate(['dashboard'])
    })
    .catch((err) => console.log(err));
  }

}
