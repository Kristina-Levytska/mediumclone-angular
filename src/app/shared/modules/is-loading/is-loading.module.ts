import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsLoadingComponent } from './components/is-loading/is-loading.component';

@NgModule({
  declarations: [IsLoadingComponent],
  imports: [CommonModule],
  exports: [IsLoadingComponent],
})
export class IsLoadingModule {}
