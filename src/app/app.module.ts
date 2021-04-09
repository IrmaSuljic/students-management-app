import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesViewComponent } from './components/courses-view/courses-view.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { StudentUpdateFormReactiveComponent } from './components/student-update-form-reactive/student-update-form-reactive.component';
import { StudentUpdateFormTemplateComponent } from './components/student-update-form-template/student-update-form-template.component';
import { StudentsViewComponent } from './components/students-view/students-view.component';
import { CompletedBorderDirective } from './directives/completed-border.directive';
import { PercentMsgPipe } from './pipes/percent-msg.pipe';
import { AddStudentFormComponent } from './components/add-student-form/add-student-form.component';
import { PageTitleComponent } from './components/page-title/page-title.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentsViewComponent,
    CoursesViewComponent,
    CompletedBorderDirective,
    PageNotFoundComponent,
    StudentDetailsComponent,
    NavComponent,
    PercentMsgPipe,
    StudentUpdateFormTemplateComponent,
    StudentUpdateFormReactiveComponent,
    AddStudentFormComponent,
    PageTitleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
