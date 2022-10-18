import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilesService {
  constructor() {}

  range(start: number, end: number): number[] {
    return [...Array(end).keys()].map((n) => n + start);
  }
}
