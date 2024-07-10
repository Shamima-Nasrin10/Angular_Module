import { Component, OnInit } from '@angular/core';
import { StudentserviceService } from '../studentservice.Service';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrl: './viewstudent.component.css'
})
export class ViewstudentComponent implements OnInit{

constructor(
  private service:StudentserviceService
){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
