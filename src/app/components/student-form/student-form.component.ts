import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { SampleServiceService } from 'src/app/services/sample-service.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  student:Student = {
    id:0,
    username:'',
    firstname:'',
    lastname:'',
    age:0,
    career:''
  };

  edit:boolean=false;
  constructor(private studentService:SampleServiceService, private router:Router, private activeRoute :ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activeRoute.snapshot.params;
    if(params.id)
    {
      this.studentService.getstudentById(parseInt(params.id)).subscribe(
        res=>{
          this.student=res; 
          this.edit=true;
        },
        err=>console.log(err)
      )
    }
  }

  saveStudent(){

    delete this.student.id;
    this.studentService.addStudent(this.student).subscribe(
      res=>{
        console.log(res);
        alert("Student Created!!");
        this.router.navigate(['/list']);
      },
      err=>console.log(err)
    )
  }

  updateStudent(){
    this.studentService.updateStudent(this.student).subscribe(
      res=>{
        alert("Student Updated!!");
        this.router.navigate(['/list']);
      },
      err=>console.log(err)
    );
  }

}
