import { Component, OnInit } from '@angular/core';
import instructors from '../instructors'
import { InstructorService } from '../instructor.service';



@Component({
  selector: 'instructor-list',
  templateUrl: './instructor-list.component.html',
  styleUrls: ['./instructor-list.component.scss']
})
export class InstructorListComponent implements OnInit {

  //instructors = instructors

  constructor(public instructorService: InstructorService) { }

  ngOnInit(): void {
  }

  getInstructorAge(instructor){
    return instructor.age < 18 ? 'green':  'blue';
  }

}
