import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePipe } from './image.pipe';
import { PairsPipe } from './pairs.pipe';
import { ImgFilterPipe } from './img-filter.pipe';

@NgModule({
  declarations: [ImagePipe, PairsPipe, ImgFilterPipe],
  imports: [CommonModule],
  exports: [ImagePipe, PairsPipe, ImgFilterPipe],
})
export class PipesModule {}
