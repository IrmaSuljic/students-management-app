import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCompletedBorder]',
})
export class CompletedBorderDirective implements OnInit {
  @Input() appCompletedBorder: number;
  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (this.appCompletedBorder < 1) {
      this.el.nativeElement.style.borderColor = 'red';
    } else if (this.appCompletedBorder > 0 && this.appCompletedBorder < 8) {
      this.el.nativeElement.style.borderColor = 'yellow';
    } else {
      this.el.nativeElement.style.borderColor = 'green';
    }
    this.el.nativeElement.style.borderRadius = '5px';
  }
}
