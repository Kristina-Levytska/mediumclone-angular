import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagFeedComponent } from './components/tag-feed/tag-feed.component';
import { RouterModule } from '@angular/router';
import { BannerModule } from '../shared/modules/banner/banner.module';
import { FeedTogglerModule } from '../shared/modules/feed-toggler/feed-toggler.module';
import { FeedModule } from '../shared/modules/feed/feed.module';
import { PopularTagModule } from '../shared/modules/popular-tags/popular-tags.module';

const routes = [
  {
    path: 'tags/:slug',
    component: TagFeedComponent,
  },
];

@NgModule({
  declarations: [TagFeedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    BannerModule,
    PopularTagModule,
    FeedTogglerModule,
  ],
})
export class TagFeedModule {}
