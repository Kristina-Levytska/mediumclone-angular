import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lf-create-article',
  templateUrl: './create-article.component.html',
})
export class CreateArticleComponent implements OnInit {
  initialValues = {
    title: '',
    description: '',
    body: '',
    tagList: [''],
  };
  constructor() {}

  ngOnInit(): void {}

  onArticleSubmit(respond: any) {
    // console.log('onSubmit in parent', respond);
  }
}
