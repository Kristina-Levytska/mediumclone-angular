import { Component, Input, OnInit } from '@angular/core';

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

  ngOnInit(): void {
    this.favoritesCount = this.favoritesCountProps;
    this.isFavorited = this.isFavoritedProps;
  }

  handleLike(): void {
    if (this.isFavorited) {
      this.favoritesCount = this.favoritesCount - 1;
    } else {
      this.favoritesCount + 1;
    }

    this.isFavorited = !this.isFavorited;
  }

  constructor() {}
}
