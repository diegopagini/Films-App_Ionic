import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent {
  @Input() movies: Movie[];
  public slidesOpts: Object = {
    slidesPerView: 3.3,
    freeMode: true,
  };
}
