import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent implements OnInit {
  
  updateForm!: FormGroup;
  studentRef!: any;

  constructor(private fb: FormBuilder,
              private studentService: StudentService,
              private router: Router,
              private act: ActivatedRoute) { 
      this.updateForm = this.fb.group({
        fullname: [''],
        age: [''],
        mobile: [''],
        email: ['']
      })
  }

  ngOnInit(): void {
    const id = this.act.snapshot.paramMap.get('id');

    this.studentService.getStudent(id).subscribe(res => {
      this.studentRef = res;
      this.updateForm = this.fb.group({
        fullname: [this.studentRef.fullname],
        age: [this.studentRef.age],
        mobile: [this.studentRef.mobile],
        email: [this.studentRef.email]
      })
    })
  }

  updateData() {
    const id = this.act.snapshot.paramMap.get('id');
    this.studentService.updateStudent(this.updateForm.value, id);
    Swal.fire({
      icon: 'success',
      title: 'Data updated successfully',
      showConfirmButton: true,
    }).then(() => {
      this.router.navigate(['../../','list'], {relativeTo: this.act});
    })
  }

}
