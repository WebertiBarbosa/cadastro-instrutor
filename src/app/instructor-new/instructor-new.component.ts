import { Component, OnInit } from '@angular/core';
import instructors from '../instructors';
import { Instructor, InstructorService } from '../instructor.service';


@Component({
  selector: 'instructor-new',
  templateUrl: './instructor-new.component.html',
  styleUrls: ['./instructor-new.component.scss']
})
export class InstructorNewComponent implements OnInit {

  instructor: Instructor = {
    name: '',
    email: '',
    address: '',
    phone: '',
    age: 0,
    especialidade: '',
  }
  
  
  constructor(private instructorService: InstructorService) { }

  ngOnInit(): void {
  }

  addInstructor() {
    // console.log(this.instructorService.instructors)
    const copy = Object.assign({}, this.instructor)
    this.instructorService.addInstructor(copy)
  }

  

}
