import { Component, OnInit,ViewChild } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Student } from 'src/app/models/student.model';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.scss']
})
export class ListStudentComponent implements OnInit {
  studentData: any = [];
  displayedColumns: string[] = ['fullname', 'age', 'mobile', 'email', 'actions'];
  dataSource!: MatTableDataSource<Student>;
  searchKey: string = '';

  @ViewChild(MatTable) table!: MatTable<any>;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.getAllStudents().subscribe(actionArray => {
      this.studentData = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data() as {}
        };
      });
      this.dataSource = new MatTableDataSource(this.studentData);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }

  deleteStudent(id: string) {
    this.studentService.deleteStudent(id);
    Swal.fire({
      icon: 'success',
      title: 'Selected Data Deleted',
      showConfirmButton: true,
    }).then(() => {
      this.table.renderRows();
    })
  }

}
