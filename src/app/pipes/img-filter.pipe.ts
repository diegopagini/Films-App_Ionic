import { Pipe, PipeTransform } from '@angular/core';
import { MovieDetail } from '../interfaces/interfaces';

@Pipe({
  name: 'ImgFilter',
})
export class ImgFilterPipe implements PipeTransform {
  transform(movies: MovieDetail[]): MovieDetail[] {
    return movies.filter((movie) => movie.backdrop_path);
  }
}
