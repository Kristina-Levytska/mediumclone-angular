import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, map, Observable } from 'rxjs';
import { ArticleInputInterface } from 'src/app/shared/types/article-input.interface';
import { ArticlesInterface } from 'src/app/shared/types/articles.interface';
import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface';
import { getArticleAction } from '../../store/actions/get-article.action';
import { updateArticleAction } from '../../store/actions/update-article.action';
import {
  articleSelector,
  isLoadingSelector,
  isSubmittingSelector,
  validationErrorsSelector,
} from '../../store/selectors';

@Component({
  selector: 'lf-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss'],
})
export class EditArticleComponent implements OnInit {
  initialValues$!: Observable<ArticleInputInterface>;
  isSubmitting$!: Observable<boolean>;
  isLoading$!: Observable<boolean>;
  validationErrors$!: Observable<BackendErrorsInterface | null>;
  slug!: string;
  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initializeValues(), this.fetchData();
  }

  initializeValues(): void {
    this.route.snapshot.paramMap.get('slug');
    this.isSubmitting$ = this.store.select(isSubmittingSelector);
    this.validationErrors$ = this.store.select(validationErrorsSelector);
    (this.initialValues$ = this.store.select(articleSelector)),
      filter(Boolean),
      map((article: ArticlesInterface) => {
        return {
          title: article.title,
          description: article.description,
          body: article.body,
          tagList: article.tagList,
          slug: article.slug,
        };
      });
    this.isLoading$ = this.store.select(isLoadingSelector);
  }

  fetchData(): void {
    this.store.dispatch(getArticleAction({ slug: this.slug }));
  }

  onArticleSubmit(articleInput: ArticleInputInterface) {
    this.store.dispatch(updateArticleAction({ slug: this.slug, articleInput }));
  }
}
