import { Component, OnInit } from '@angular/core';

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
  instructors = [];

  constructor() { }

  ngOnInit(): void {
  }

  addInstructor() {
    this.instructors.push(this.name);
    this.instructors.push(this.email);
    this.instructors.push(this.address);
    this.instructors.push(this.phone);
    this.instructors.push(this.age);

    console.log(this.instructors)
  }

}
