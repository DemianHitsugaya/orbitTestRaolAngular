import { Component, HostBinding, OnInit } from '@angular/core';
import { SampleServiceService } from 'src/app/services/sample-service.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  @HostBinding('class') classes='row'

  students: any = [];

  constructor( private studentService:SampleServiceService) { }

  ngOnInit(): void {
    this.getStudents();
  }

  deleteStudent(id:string){
    this.studentService.deleteStudent(parseInt(id)).subscribe(
      res=>{
        alert("Student Deleted!!");
        this.getStudents()
      },
      err=>console.log(err)
    )
  }

  getStudents(){
    this.studentService.getStudents().subscribe(
      res=>{
        this.students = res;
      },
      err=>console.log(err)
    );
  }
  
}
