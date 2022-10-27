import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  errorSelector,
  isLoadingSelector,
  popularTagSelector,
} from '../../selectors';
import { getPopularTagAction } from '../../store/actions/getPopularTags.action';
import { PopularTag } from '../../types/popular-tags.interface';

@Component({
  selector: 'lf-popular-tags',
  templateUrl: './popular-tags.component.html',
})
export class PopularTagComponent implements OnInit {
  popularTag$!: Observable<PopularTag[] | null>;
  isLoading$!: Observable<boolean>;
  error$!: Observable<string | null>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
  }

  initializeValues(): void {
    this.popularTag$ = this.store.select(popularTagSelector);
    this.isLoading$ = this.store.select(isLoadingSelector);
    this.error$ = this.store.select(errorSelector);

    this.popularTag$.subscribe((data) => {
      console.log(data);
    });
  }

  fetchData(): void {
    this.store.dispatch(getPopularTagAction());
  }
}
