import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isLoggedIn: boolean = false;

  constructor(private afAuth: AngularFireAuth) { }

  /* sign up */
  async signUp(email: string, password: string) {
    await this.afAuth.createUserWithEmailAndPassword(email, password)
    .then(res => {
      this.isLoggedIn = true;
      console.log('You are Successfully Registered!', res);
      localStorage.setItem('User', JSON.stringify(res.user));
    })
    .catch(error => {
      console.log('Something is wrong: ', error.message);
    });
  }

  /* sign in */
  async signIn(email: string, password: string) {
    await this.afAuth.signInWithEmailAndPassword(email, password)
    .then(res => {
      this.isLoggedIn = true;
      console.log('You are login!');
      localStorage.setItem('User', JSON.stringify(res.user));
    })
    .catch(err => {
      console.log('Something went wrong: ', err.message);
    });
  }

  /* sign out */
  signOut() {
    this.afAuth.signOut();
    localStorage.removeItem('User');
    console.log('you are sign out');
  }
}
