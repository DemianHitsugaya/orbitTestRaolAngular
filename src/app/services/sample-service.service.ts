import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root',
})
export class SampleServiceService {
  API_URI = 'https://localhost:44353/Student';

  constructor(private http: HttpClient) {}

  getStudents() {
    let headers = new HttpHeaders();
    headers = headers.set('Access-Control-Allow-Origin', '*');
    return this.http.get(`${this.API_URI}/GetStudents`,{headers});
  }

  getStudentByuser(user: string) {
    return this.http.post(
      `${this.API_URI}/GetStudentbyUsername`,
      '"' + user + '"'
    );
  }

  addStudent(studen: Student) {
    let sendStudent = JSON.stringify(studen);
    let body = new HttpParams();
    body = body.set('student', sendStudent);
    return this.http.post(`${this.API_URI}/AddStudent`, body);
  }

  updateStudent(studen: Student) {
    let sendStudent = JSON.stringify(studen);
    let body = new HttpParams();
    body = body.set('student', sendStudent);
    return this.http.put(`${this.API_URI}/EditStudent`, body);
  }

  deleteStudent(id: number) {
    let idStudent = JSON.stringify(id);
    let body = new HttpParams();
    body = body.set('', idStudent);

    let options = { params: body };

    return this.http.delete(`${this.API_URI}/DeleteStudent`, options);
  }


  getstudentById(id:number) {
    let sendStudent = JSON.stringify(id);
    let body = new HttpParams();
    body = body.set('', sendStudent);
    return this.http.post<Student>(`${this.API_URI}/GetStudentbyId`, body);
  }
}
