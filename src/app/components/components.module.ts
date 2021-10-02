import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { IonicModule } from '@ionic/angular';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { PipesModule } from '../pipes/pipes.module';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';

@NgModule({
  declarations: [
    SpinnerComponent,
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
  ],
  imports: [CommonModule, IonicModule, PipesModule],
  exports: [
    SpinnerComponent,
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
  ],
})
export class ComponentsModule {}
