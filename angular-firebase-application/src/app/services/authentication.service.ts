import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isLoggedIn: boolean = false;

  constructor(private afAuth: AngularFireAuth, private toastService: HotToastService, private router: Router) { }

  /* sign up */
  async signUp(email: string, password: string) {
    await this.afAuth.createUserWithEmailAndPassword(email, password)
    .then(res => {
      this.isLoggedIn = true;
      console.log('You are Successfully Registered!', res);
      this.toastService.success('You are Successfully Registered!');
      this.router.navigate(['/login']);
    })
    .catch(error => {
      console.log('Something is wrong: ', error.message);
      this.toastService.error('Something is wrong');
    });
  }

  /* sign in */
  async signIn(email: string, password: string) {
    await this.afAuth.signInWithEmailAndPassword(email, password)
    .then(res => {
      this.isLoggedIn = true;
      console.log('You are login!');
      this.toastService.success('You are Successfully Login!');
      this.router.navigate(['/dashboard']);
    })
    .catch(err => {
      console.log('Something went wrong: ', err.message);
      this.toastService.error('Student Not Found');
    });
  }

  /* sign out */
  signOut() {
    this.afAuth.signOut();
    localStorage.removeItem('User');
    console.log('you are sign out');
  }
}
