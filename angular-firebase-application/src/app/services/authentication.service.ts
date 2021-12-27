import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isLoggedIn: boolean = false;
  userData: any;

  constructor(private afAuth: AngularFireAuth, 
              private router: Router, 
              private toastService: HotToastService) {
    this.afAuth.authState.subscribe(user => {
      if(user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user') || '{}');
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user') || '{}');
      }
    })
  }

  async SignUp(email: any, password: any) {
    try {
      const res = await this.afAuth.createUserWithEmailAndPassword(email, password);
      console.log('You are successfully signed up!', res);
      this.toastService.success('You are successfully signed up!', {
        style: {
          border: '1px solid #713200',
          padding: '16px',
          color: '#713200',
        },
      });
      this.router.navigateByUrl('/login');
    } catch (error) {
      console.log('Something is wrong: ', error);
      this.toastService.error("Something is wrong");
    }
  }

  async SignIn(email: any, password: any) {
    try {
      const res = await this.afAuth.signInWithEmailAndPassword(email, password);
      this.isLoggedIn = true;
      console.log('You are successfully logged in!', res);
      this.toastService.success('Login successful', {
        style: {
          border: '1px solid #713200',
          padding: '16px',
          color: '#713200',
        },
      });
      this.router.navigateByUrl('/dashboard');
    } catch (error) {
      console.log('Something is wrong: ', error);
      this.toastService.error("Student not found");
    }
  }

  /* sign out */
  async signOut() {
    await this.afAuth.signOut();
    localStorage.removeItem('user');
    console.log('you are sign out');
    
  }
}
