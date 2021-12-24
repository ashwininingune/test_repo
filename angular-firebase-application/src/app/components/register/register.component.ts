import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  signupForm!: FormGroup;
  isSignedIn: boolean = false;

  constructor(private formBuilder: FormBuilder, 
              private router: Router,
              private authSrv: AuthenticationService) {
    this.signupForm = this.formBuilder.group({
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

  async register() {
    console.log(this.signupForm.value);
    if(this.signupForm.invalid){
      return;
    }

    if(this.signupForm.valid) {
      this.authSrv.signUp(this.signupForm.value.email, this.signupForm.value.password);
      
      if(this.authSrv.isLoggedIn) {
        this.isSignedIn = true;
        Swal.fire({
          icon: 'success',
          title: 'Student has been added successfully!!!',
          showConfirmButton: true,
        }).then(() => {
          this.router.navigate(['/login']);
        })
        this.signupForm.reset();
      } 
    }
      
  }

  public errorHandling = (control: string, error: string) => {
    return this.signupForm.controls[control].hasError(error);
  }
}
