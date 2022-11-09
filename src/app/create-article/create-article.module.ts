import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateArticleComponent } from './components/create-article/create-article.component';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { ArticleFormModule } from '../shared/modules/article-form/article-form.module';
import { CreateArticleService } from './services/create-article.service';
import { CreateArticleEffect } from './store/effects/create-article.effect';
import { CREATE_ARTICLE_STORE_KEY, reducers } from './store/reducers';
import { StoreModule } from '@ngrx/store';

const routes = [
  {
    path: 'articles/new',
    component: CreateArticleComponent,
  },
];

@NgModule({
  declarations: [CreateArticleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ArticleFormModule,
    StoreModule.forFeature(CREATE_ARTICLE_STORE_KEY, reducers),
    EffectsModule.forFeature([CreateArticleEffect]),
  ],
  providers: [CreateArticleService],
  // exports: []
})
export class CreateArticleModule {}
