import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable()
export class SignInService {
  constructor(
    private router: Router,
  ) {}

  signIn(email, password): void {
    // this.angularFireAuth
    //   .signInWithEmailAndPassword(email, password)
    //   .then(() => {
        this.router.navigate(['/dashboard']);
      // })
      // .catch((error) => {
      //   window.alert(error.message);
      // });
  }

  logout(): void {
    // this.angularFireAuth
    //   .signOut()
    //   .then(() => {
        this.router.navigate(['/sign-in']);
      // })
      // .catch((error) => {
      //   window.alert(error.message);
      // });
  }
}
