import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InstructorNewComponent } from './instructor-new/instructor-new.component';
import { InstructorListComponent } from './instructor-list/instructor-list.component';
import { HomeComponent } from './home/home.component'

import {FormsModule} from '@angular/forms'
import { NgxMaskModule } from 'ngx-mask';
import { EspecialidadeColorDirective } from './especialidade-color.directive';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    InstructorNewComponent,
    InstructorListComponent,
    EspecialidadeColorDirective,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxMaskModule.forRoot({dropSpecialCharacters: false}),
    routing,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
