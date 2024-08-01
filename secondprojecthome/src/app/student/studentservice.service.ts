import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentModel } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {

  baseUrl:string="http://localhost:3000/students/";

  constructor(

    private httpClient:HttpClient

  ) { }

viewAllStudent():Observable<any>{

return this.httpClient.get(this.baseUrl);

}

createStudent(studentModel:StudentModel):Observable<StudentModel>{
  return this.httpClient.post<StudentModel>(this.baseUrl, studentModel);
}

updateStudent(student: StudentModel): Observable<StudentModel>{
  return this.httpClient.put<StudentModel>(`${this.baseUrl}${student.id}`, student);
}

deleteStudent(studentId: string): Observable<void>{
  return this.httpClient.delete<void>(`${this.baseUrl}${studentId}`);
  // return this.httpClient.delete<void>(this.baseUrl+studentId);
}

getStudentById(studentId: string): Observable<StudentModel> {
  // const url = `${this.baseUrl}/${studentId}`;
  return this.httpClient.get<StudentModel>(`${this.baseUrl}${studentId}`);
}

}
