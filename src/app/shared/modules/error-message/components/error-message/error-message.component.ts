import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lf-error-message',
  templateUrl: './error-message.component.html',
})
export class ErrorMessageComponent implements OnInit {
  @Input() error: string = 'Something went wrong...';
  constructor() {}

  ngOnInit(): void {}
}
