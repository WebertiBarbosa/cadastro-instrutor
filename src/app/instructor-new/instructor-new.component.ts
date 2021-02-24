import { Component, OnInit } from '@angular/core';
import instructors from '../instructors'

@Component({
  selector: 'instructor-new',
  templateUrl: './instructor-new.component.html',
  styleUrls: ['./instructor-new.component.scss']
})
export class InstructorNewComponent implements OnInit {

  name = '';
  email = '';
  address = '';
  phone = '';
  age = '';
  instructors = instructors;

  constructor() { }

  ngOnInit(): void {
  }

  addInstructor() {
    this.instructors.push({
      name: this.name, email: this.email, address: this.address, phone: this.phone,
      age: this.age});   

    console.log(this.instructors)
  }

}
