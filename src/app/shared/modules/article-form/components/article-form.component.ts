import { Component, Input, OnInit } from '@angular/core';
import { ArticleInputInterface } from 'src/app/shared/types/article-input.interface';
import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface';

@Component({
  selector: 'lf-article-form',
  templateUrl: './article-form.component.html',
})
export class ArticleFormComponent implements OnInit {
  @Input() initialValuesProps!: ArticleInputInterface;
  @Input() isSubmittingProps!: boolean;
  @Input() errorsProps!: BackendErrorsInterface | null;

  constructor() {}

  ngOnInit(): void {}
}
