import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePipe } from './image.pipe';
import { PairsPipe } from './pairs.pipe';

@NgModule({
  declarations: [ImagePipe, PairsPipe],
  imports: [CommonModule],
  exports: [ImagePipe, PairsPipe],
})
export class PipesModule {}
