import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { StudentsViewComponent } from './components/students-view/students-view.component';
import { CoursesViewComponent } from './components/courses-view/courses-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentsViewComponent,
    CoursesViewComponent
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
