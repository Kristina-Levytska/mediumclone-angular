import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addToFavoritesAction } from '../store/actions/add-to-favorites.action';

@Component({
  selector: 'lf-add-to-favorites',
  templateUrl: './add-to-favorites.component.html',
})
export class AddToFavoritesComponent implements OnInit {
  @Input() isFavoritedProps!: boolean;
  @Input() favoritesCountProps!: number;
  @Input() articleSlugProps!: string;

  public favoritesCount!: number;
  public isFavorited!: boolean;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.favoritesCount = this.favoritesCountProps;
    this.isFavorited = this.isFavoritedProps;
  }

  handleLike(): void {
    this.store.dispatch(
      addToFavoritesAction({
        isFavorited: this.isFavorited,
        slug: this.articleSlugProps,
      })
    );
    if (this.isFavorited) {
      this.favoritesCount = this.favoritesCount - 1;
    } else {
      this.favoritesCount + 1;
    }

    this.isFavorited = !this.isFavorited;
  }
}
