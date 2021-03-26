import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { StudentsViewComponent } from './components/students-view/students-view.component';
import { CoursesViewComponent } from './components/courses-view/courses-view.component';
import { CompletedBorderDirective } from './directives/completed-border.directive';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { NavComponent } from './components/nav/nav.component';
import { PercentMsgPipe } from './pipes/percent-msg.pipe';

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
    PercentMsgPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
