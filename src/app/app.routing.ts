import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { InstructorListComponent } from "./instructor-list/instructor-list.component";
import { InstructorNewComponent } from "./instructor-new/instructor-new.component";

const APP_ROUTES: Routes = [
  { path: 'instrutor-list', component: InstructorListComponent },
  { path: 'instructor-new', component: InstructorNewComponent },
  { path: '', component:HomeComponent }
]


export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(APP_ROUTES)