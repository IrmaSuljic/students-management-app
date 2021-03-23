import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
})
export class StudentDetailsComponent implements OnInit {
  id: number;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.route.params.subscribe((params) => {
    //   this.id = params['id'];
    // });
    this.id = this.route.snapshot.params.id;
  }
}
