import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InstructorNewComponent } from './instructor-new/instructor-new.component';
import { InstructorListComponent } from './instructor-list/instructor-list.component';

import {FormsModule} from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
    InstructorNewComponent,
    InstructorListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
