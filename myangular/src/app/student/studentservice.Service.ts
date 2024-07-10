import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentserviceService implements OnInit
{

baseUrl:string="http://localhost:3000/students";

  constructor(private http:HttpClient) { }
  

  viewAllStudent():Observable<any>{

    return this.http.get(this.baseUrl);
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
