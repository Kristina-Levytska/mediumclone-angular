import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { FeedComponent } from './components/feed/feed.component';
import { GetFeedEffect } from './store/effects/getFeed.effect';
import { StoreModule } from '@ngrx/store';
import { FEED_STORE_KEY, reducers } from '../feed/store/reducers';
import { FeedService } from './services/feed.service';
import { RouterModule } from '@angular/router';
import { ErrorMessageModule } from '../error-message/error-message.module';
import { IsLoadingModule } from '../is-loading/is-loading.module';
import { PaginationModule } from '../pagination/pagination.module';
import { TagListModule } from '../tag-list/tag-list.module';

@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature(FEED_STORE_KEY, reducers),
    RouterModule,
    ErrorMessageModule,
    IsLoadingModule,
    PaginationModule,
    TagListModule,
  ],
  exports: [FeedComponent],
  providers: [FeedService],
})
export class FeedModule {}
