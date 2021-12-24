import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private fs: AngularFirestore) { }

  // add new student data
  createStudent(student: Student) {
    return this.fs.collection('students').add(student);
  }

  // get all students data
  getAllStudents() {
    return this.fs.collection('students').snapshotChanges();
  }

  //get single student data
  getStudent(id: any) {
    return this.fs.collection('students').doc(id).valueChanges();
  }

  //delete single student data
  deleteStudent(id: any) {
    this.fs.doc('students/' + id).delete();
  }

  //update student data
  updateStudent(student: Student, id: any){
    this.fs.collection('students').doc(id).update({
      fullname: student.fullname,
      age: student.age,
      mobile: student.mobile,
      email: student.email
    });
  }

}
