import { Injectable } from '@angular/core';

export interface Instructor {
  name: string;
  email: string;
  address: string;
  phone: string;
  age: number;
  especialidade: string;
}

@Injectable({
  providedIn: 'root'
})
export class InstructorService {
  instructors: Instructor[] = []

  constructor() {

   }
   addInstructor(instructor: Instructor){
    this.instructors.push(instructor); 
   }
}
