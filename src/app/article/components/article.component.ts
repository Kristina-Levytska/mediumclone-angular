import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest, map, Observable, Subscription } from 'rxjs';
import { currentUserSelector } from 'src/app/auth/store/selectors';
import { ArticlesInterface } from 'src/app/shared/types/articles.interface';
import { deleteArticleAction } from '../store/actions/delete-article.action';
import { getArticleAction } from '../store/actions/get-article.action';
import {
  articleSelector,
  errorSelector,
  isLoadingSelector,
} from '../store/selectors';

@Component({
  selector: 'lf-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit, OnDestroy {
  slug!: string;
  article!: ArticlesInterface | null;
  articleSubscription!: Subscription;
  isLoading$!: Observable<boolean>;
  error$!: Observable<string | null>;
  isAuthor$!: Observable<boolean>;

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
    this.initializeListeners();
  }

  ngOnDestroy(): void {
    this.articleSubscription.unsubscribe();
  }

  initializeListeners(): void {
    this.articleSubscription = this.store
      .select(articleSelector)
      .subscribe((article: ArticlesInterface | null) => {
        this.article = article;
      });
  }

  initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug') as string;

    this.isLoading$ = this.store.select(isLoadingSelector);
    this.error$ = this.store.select(errorSelector);
    this.isAuthor$ = combineLatest([
      this.store.select(currentUserSelector),
      this.store.select(articleSelector),
    ]).pipe(
      map(([currentUser, article]) => {
        if (!article || !currentUser) {
          return false;
        }
        return currentUser.username === article.author.username;
      })
    );
  }

  fetchData(): void {
    this.store.dispatch(getArticleAction({ slug: this.slug }));
  }

  deleteArticle(): void {
    this.store.dispatch(deleteArticleAction({ slug: this.slug }));
  }
}
