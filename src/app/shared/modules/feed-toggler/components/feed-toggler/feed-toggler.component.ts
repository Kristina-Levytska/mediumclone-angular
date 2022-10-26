import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { throws } from 'assert';
import { Observable } from 'rxjs';
import { isLoggedInSelector } from 'src/app/auth/store/selectors';

@Component({
  selector: 'lf-feed-toggler',
  templateUrl: './feed-toggler.component.html',
})
export class FeedTogglerComponent implements OnInit {
  @Input() tagNameProps!: string | null;

  isLoggedIn$!: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
  }
}
