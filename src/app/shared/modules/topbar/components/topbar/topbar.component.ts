import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  currentUserSelector,
  isLoggedInSelector,
  isNotLoggedInSelector,
} from 'src/app/auth/store/selectors';
import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';

@Component({
  selector: 'lf-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
  isLoggedIn$!: Observable<boolean>;
  isNotLoggedIn$!: Observable<boolean>;
  currentUser$!: Observable<CurrentUserInterface | null>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
    this.isNotLoggedIn$ = this.store.pipe(select(isNotLoggedInSelector));
    this.currentUser$ = this.store.pipe(select(currentUserSelector));
  }
}
