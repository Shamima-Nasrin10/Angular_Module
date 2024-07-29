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

}
