import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { FeedComponent } from './components/feed/feed.component';
import { GetFeedEffect } from './store/effects/getFeed.effect';
import { StoreModule } from '@ngrx/store';
import { FEED_STORE_KEY, reducers } from '../feed/store/reducers';
import { FeedService } from './services/feed.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature(FEED_STORE_KEY, reducers),
    RouterModule,
  ],
  exports: [FeedComponent],
  providers: [FeedService],
})
export class FeedModule {}
