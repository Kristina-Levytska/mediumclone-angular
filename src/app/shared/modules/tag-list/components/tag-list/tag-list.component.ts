import { Component, Input, OnInit } from '@angular/core';
import { PopularTagType } from 'src/app/shared/types/popular-tag.type';

@Component({
  selector: 'lf-tag-list',
  templateUrl: './tag-list.component.html',
})
export class TagListComponent implements OnInit {
  @Input() tags!: PopularTagType[];

  constructor() {}

  ngOnInit(): void {}
}
