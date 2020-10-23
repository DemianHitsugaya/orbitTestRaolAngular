import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root',
})
export class SampleServiceService {
  API_URI = 'https://localhost:44353/Student';

  constructor(private http: HttpClient) {}

  getStudents() {
    return this.http.get(`${this.API_URI}/GetStudents`);
  }

  getStudentByuser(user: string) {
    return this.http.post(`${this.API_URI}/GetStudents`, '"' + user + '"');
  }

  addStudent(studen: Student) {
    let bar = JSON.stringify(studen);
    let body = new HttpParams();
    body = body.set('student', bar);
    return this.http.post(`${this.API_URI}/AddStudent`, body);
  }

  updateStudent(studen: Student) {
    let bar = JSON.stringify(studen);
    let body = new HttpParams();
    body = body.set('student', bar);
    return this.http.post(`${this.API_URI}/AddStudent`, body);
  }

  deleteStudent(id: number) {
    let bar = JSON.stringify(id);
    let body = new HttpParams();
    body = body.set('', bar);

    let options = { params: body };

    return this.http.delete(`${this.API_URI}/DeleteStudent`, options);
  }
}
