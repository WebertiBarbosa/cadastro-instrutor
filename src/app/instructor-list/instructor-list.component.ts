import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { InstructorService } from '../instructor.service';



@Component({
  selector: 'instructor-list',
  templateUrl: './instructor-list.component.html',
  styleUrls: ['./instructor-list.component.scss']
})
export class InstructorListComponent implements OnInit {


  constructor(public instructorService: InstructorService) { }

  ngOnInit(): void {
  }

  
}
