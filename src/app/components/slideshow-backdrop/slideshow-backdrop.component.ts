import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent {
  @Input() movies: Movie[];
  public slidesOpts: Object = {
    slidesPerView: 1.3,
    freeMode: true,
  };
}
