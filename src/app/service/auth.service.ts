import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(private _firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = _firebaseAuth.authState;

    this.user.subscribe((user) => {
      if(user) {
        this.userDetails = user;
        this.router.navigateByUrl('/dashboard');
      }
      else {
        this.userDetails = null;
      }
    })
   }

   signUp(email: string, password: string) {
     this._firebaseAuth.auth.createUserWithEmailAndPassword(email,password)
     .then(value => {
        console.log('Success!', value);
     })
     .catch(err =>
      console.log('Something went wrong: ', err.message
    ));
   }

   signInWithFacebook() {
     return this._firebaseAuth.auth.signInWithPopup(
       new firebase.auth.FacebookAuthProvider()
     )
   }

   signInWithGoogle() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
  }

  isLoggedIn() {
    if (this.userDetails == null ) {
        return false;
      } else {
        return true;
      }
    }
  
  
    logout() {
      this._firebaseAuth.auth.signOut()
      .then((res) => this.router.navigate(['/']));
    }

}
