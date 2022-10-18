import { Component, Input, OnInit } from '@angular/core';
import { UtilesService } from 'src/app/shared/services/utiles.service';
import { Url } from 'url';

@Component({
  selector: 'lf-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() totalProps!: number;
  @Input() limitProps!: number;
  @Input() urlProps!: string;
  @Input() currentPageProps!: number;

  pagesCount!: number;
  pages!: number[];

  constructor(private utilesService: UtilesService) {}

  ngOnInit(): void {
    this.pagesCount = Math.ceil(this.totalProps / this.limitProps);
    this.pages = this.utilesService.range(1, this.pagesCount);
  }
}
