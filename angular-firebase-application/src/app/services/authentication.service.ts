import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userData: any;
  isLoggedIn: boolean = false;

  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore, 
              private toastService: HotToastService, 
              private router: Router) {
    this.afAuth.authState.subscribe(user => {
      if(user) {
        this.userData = user;
        localStorage.setItem('User', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('User')!);
      } else {
        localStorage.setItem('User', 'null');
        JSON.parse(localStorage.getItem('User')!);
      }
    })
  }

  setUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      emailVerified: user.emailVerified
    }
    return userRef.set(userData, {merge: true})
  }

  /* sign up */
  async signUp(email: string, password: string) {
    await this.afAuth.createUserWithEmailAndPassword(email, password)
    .then(result => {
      this.isLoggedIn = true;
      this.setUserData(result.user);
      console.log('You are Successfully Registered!', result);
      this.toastService.success('You are Successfully Registered!');
      this.router.navigate(['/login']);
    }).catch(error => {
      console.log('Something is wrong: ', error.message);
      this.toastService.error('Something is wrong');
    });
  }

  /* sign in */
  async signIn(email: string, password: string) {
    await this.afAuth.signInWithEmailAndPassword(email, password)
    .then(result => {
      this.isLoggedIn = true;
      this.setUserData(result.user);
      console.log('You are login!', result);
      this.toastService.success('You are Successfully Login!');
      this.router.navigate(['/dashboard']);
    }).catch(err => {
      console.log('Something went wrong: ', err.message);
      this.toastService.error('Student Not Found');
    });
  }

  autoSignIn() {
    const usersData = JSON.parse(localStorage.getItem('User')!);
    console.log(usersData);
    if(!usersData) {
      return;
    }
  }

  /* sign out */
  async signOut() {
    await this.afAuth.signOut();
    localStorage.removeItem('User');
    this.router.navigate(['/']);
  }
}
