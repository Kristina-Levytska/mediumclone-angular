import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedArticleService } from '../shared/services/article.service';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ARTICLE_STORE_KEY, reducers } from './store/reducers';
import { GetArticleEffect } from './store/effects/get-article.effect';
import { RouterModule } from '@angular/router';
import { ErrorMessageModule } from '../shared/modules/error-message/error-message.module';
import { IsLoadingModule } from '../shared/modules/is-loading/is-loading.module';
import { ArticleComponent } from './components/article.component';
import { TagListModule } from '../shared/modules/tag-list/tag-list.module';
import { ArticleService } from './services/article.service';
import { DeleteArticleEffect } from './store/effects/delete-article.effect';

const routes = [
  {
    path: 'articles/:slug',
    component: ArticleComponent,
  },
];

@NgModule({
  declarations: [ArticleComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetArticleEffect, DeleteArticleEffect]),
    StoreModule.forFeature(ARTICLE_STORE_KEY, reducers),
    RouterModule,
    ErrorMessageModule,
    IsLoadingModule,
    RouterModule.forChild(routes),
    TagListModule,
  ],
  exports: [],
  providers: [SharedArticleService, ArticleService],
})
export class ArticleModule {}
