import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { combineLatest, filter, map, Observable, Subscription } from 'rxjs';
import { currentUserSelector } from 'src/app/auth/store/selectors';
import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';
import { ProfileInterface } from 'src/app/shared/types/profile.interface';
import { getUserProfileAction } from '../../store/actions/get-user-profile.action';
import {
  errorSelector,
  isLoadingSelector,
  userProfileSelector,
} from '../../store/selectors';

@Component({
  selector: 'lf-user-profile',
  templateUrl: './user-profile.component.html',
})
export class UserProfileComponent implements OnInit, OnDestroy {
  userProfile!: ProfileInterface;
  isLoading$!: Observable<boolean>;
  error$!: Observable<string | null>;
  userProfileSubscription!: Subscription;
  slug!: string;
  apiUrl!: string;
  isCurrentUserProfile$!: Observable<boolean>;

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
  }

  ngOnDestroy(): void {
    this.userProfileSubscription.unsubscribe();
  }

  initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug') as string;
    this.isLoading$ = this.store.select(isLoadingSelector);
    this.error$ = this.store.select(errorSelector);
    this.isCurrentUserProfile$ = combineLatest([
      this.store.pipe(select(currentUserSelector), filter(Boolean)),
      this.store.pipe(select(userProfileSelector), filter(Boolean)),
    ]).pipe(
      map(
        ([currentUser, userProfile]: [
          CurrentUserInterface,
          ProfileInterface
        ]) => {
          return currentUser.username === userProfile.username;
        }
      )
    );
  }

  initializeListeners(): void {
    this.userProfileSubscription = this.store
      .select(userProfileSelector)
      .subscribe((userProfile) => {
        this.userProfile = userProfile!;
      });

    this.route.params.subscribe((params: Params) => {
      this.slug = params['slug'];
      this.fetchUserProfile();
    });
  }

  fetchUserProfile(): void {
    this.store.dispatch(getUserProfileAction({ slug: this.slug }));
  }

  getApiUrl(): string {
    const isFavorites = this.router.url.includes('favorites');
    return (this.apiUrl = isFavorites
      ? `/articles?favorited=${this.slug}`
      : `/articles?author=${this.slug}`);
  }
}
