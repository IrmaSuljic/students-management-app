import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesViewComponent } from './components/courses-view/courses-view.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { StudentsViewComponent } from './components/students-view/students-view.component';
import { CompletedBorderDirective } from './directives/completed-border.directive';
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
    PercentMsgPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
