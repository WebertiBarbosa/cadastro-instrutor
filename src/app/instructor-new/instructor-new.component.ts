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
  age = 0;
  especialidade= '';
  
  // selectedModality = '';
  

  // modality: Modality[] = [
  //  {id: 1, name: 'Musculação'}, 
  //  {id: 2, name: 'Spinning'}, 
  //  {id: 3, name: 'Power Jump'}, 
  //  {id: 4, name: 'Zumba'}, 
  //  {id: 5, name: 'Yoga'}, 
  //  {id: 6, name: 'Pilates'}, 
  //  {id: 7, name: 'Funcional'}, 
  //  {id: 8, name: 'Body Pump'}, 
  //  {id: 9, name: 'Alongamento'}, 
  //  {id: 10, name: 'Lutas'}, 
  // ]


  instructors = instructors;

  

  constructor() { }

  ngOnInit(): void {
  }

  addInstructor() {
    this.instructors.push({
      name: this.name, email: this.email, address: this.address, phone: this.phone,
      age: this.age, especialidade: this.especialidade});   
      // name: this.name, email: this.email, address: this.address, phone: this.phone,
      // age: this.age});   

    console.log(this.instructors)
  }

}
