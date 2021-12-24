import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  isSignedIn: boolean = false;

  constructor(private authSrv: AuthenticationService, 
              private router: Router, 
              private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    if(localStorage.getItem('User') !== null) {
      this.isSignedIn = true;
    } else {
      this.isSignedIn = false;
    }
  }

  async login() {
    // console.log(this.loginForm.value);
    if(this.loginForm.invalid) {
      return;
    }

    if(this.loginForm.valid) {
      this.authSrv.signIn(this.loginForm.value.email, this.loginForm.value.password);

      if(this.authSrv.isLoggedIn) {
        this.isSignedIn = true;
        Swal.fire({
          icon: 'success',
          title: 'Login successful',
          showConfirmButton: true,
        }).then(() => {
          this.router.navigate(['/dashboard']);
        })  
      } 
      else {
        //show alert box for error
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Student not found',
          showConfirmButton: true,
        })
      }
      
    }
  }

  public errorHandling = (control: string, error: string) => {
    return this.loginForm.controls[control].hasError(error);
  }

}
