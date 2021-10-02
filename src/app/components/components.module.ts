import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { IonicModule } from '@ionic/angular';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { PipesModule } from '../pipes/pipes.module';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';
import { SlideshowPairsComponent } from './slideshow-pairs/slideshow-pairs.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    SpinnerComponent,
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    SlideshowPairsComponent,
    DetailsComponent,
  ],
  imports: [CommonModule, IonicModule, PipesModule],
  exports: [
    SpinnerComponent,
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    SlideshowPairsComponent,
    DetailsComponent,
  ],
})
export class ComponentsModule {}
