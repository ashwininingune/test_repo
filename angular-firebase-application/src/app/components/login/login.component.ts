import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  isSignedIn: boolean = false;

  constructor(private authSrv: AuthenticationService, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  ngOnInit(): void {
    if(localStorage.getItem('User') !== null) {
      this.isSignedIn = true;
    } else {
      this.isSignedIn = false;
    }
  }

  login() {
    if(this.loginForm.invalid) {
      return;
    }
    this.authSrv.SignIn(this.loginForm.value.email, this.loginForm.value.password);
  }

  public errorHandling = (control: string, error: string) => {
    return this.loginForm.controls[control].hasError(error);
  }

}
