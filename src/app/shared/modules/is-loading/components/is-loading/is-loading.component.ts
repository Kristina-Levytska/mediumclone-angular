import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lf-is-loading',
  templateUrl: './is-loading.component.html',
})
export class IsLoadingComponent implements OnInit {
  @Input() loading: string = 'Loading...';
  constructor() {}

  ngOnInit(): void {}
}
