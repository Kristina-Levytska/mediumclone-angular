import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularTagService } from './services/popular-tags.service';
import { StoreModule } from '@ngrx/store';
import { POPULAR_TAGS_STORE_KEY, reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { GetPopularTagEffect } from './store/effects/getPopularTags.effect';
import { PopularTagComponent } from './components/popular-tags/popular-tags.component';
import { RouterModule } from '@angular/router';
import { IsLoadingModule } from '../is-loading/is-loading.module';
import { ErrorMessageModule } from '../error-message/error-message.module';

@NgModule({
  declarations: [PopularTagComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(POPULAR_TAGS_STORE_KEY, reducers),
    EffectsModule.forFeature([GetPopularTagEffect]),
    RouterModule,
    IsLoadingModule,
    ErrorMessageModule,
  ],
  exports: [PopularTagComponent],
  providers: [PopularTagService],
})
export class PopularTagModule {}
