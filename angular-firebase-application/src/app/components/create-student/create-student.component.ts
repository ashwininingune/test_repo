import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent implements OnInit {

  studentForm!: FormGroup;

  constructor(private fb: FormBuilder,
              private studentService: StudentService, 
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.studentForm = this.fb.group({
      fullname: ['', [Validators.required]],
      age: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      email: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  saveData() {
    console.log(this.studentForm.value);

    if(this.studentForm.valid){
      this.studentService.createStudent(this.studentForm.value);
      Swal.fire({
        icon: 'success',
        title: 'Student data added successfully',
        showConfirmButton: true,
      }).then(() => {
        this.studentForm.reset();
        this.router.navigate(['../','list'], {relativeTo: this.activatedRoute});
      })
    }
  }

  public errorHandling = (control: string, error: string) => {
    return this.studentForm.controls[control].hasError(error);
  }

}
