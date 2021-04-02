import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { StudentUpdateFormReactiveComponent } from './components/student-update-form-reactive/student-update-form-reactive.component';
import { StudentUpdateFormTemplateComponent } from './components/student-update-form-template/student-update-form-template.component';
import { StudentsViewComponent } from './components/students-view/students-view.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'students',
    component: StudentsViewComponent,
  },
  {
    path: 'student-details/:id',
    component: StudentDetailsComponent,
  },
  {
    path: 'student-update-form-reactive/:id',
    component: StudentUpdateFormReactiveComponent,
  },
  {
    path: 'student-update-form-template/:id',
    component: StudentUpdateFormTemplateComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
