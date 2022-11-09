import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditArticleService } from './services/edit-article.service';
import { SharedArticleService } from '../shared/services/article.service';
import { EffectsModule } from '@ngrx/effects';
import { UpdateArticleEffect } from './store/effects/update-article.effect';
import { GetArticleEffect } from './store/effects/get-article.effect';
import { StoreModule } from '@ngrx/store';
import { EDIT_ARTICLE_STORE_KEY, reducers } from './store/reducers';
import { EditArticleComponent } from './components/edit-article/edit-article.component';
import { IsLoadingModule } from '../shared/modules/is-loading/is-loading.module';
import { ArticleFormModule } from '../shared/modules/article-form/article-form.module';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: 'articles/:slug/edit',
    component: EditArticleComponent,
  },
];

@NgModule({
  declarations: [EditArticleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([UpdateArticleEffect, GetArticleEffect]),
    ArticleFormModule,
    StoreModule.forFeature(EDIT_ARTICLE_STORE_KEY, reducers),
    IsLoadingModule,
  ],
  providers: [EditArticleService, SharedArticleService],
})
export class EditArticleModule {}
