import { Pipe, PipeTransform } from '@angular/core';

const URL = 'https://image.tmdb.org/t/p';

@Pipe({
  name: 'Image',
})
export class ImagePipe implements PipeTransform {
  transform(img: string, size: string = 'w500'): string {
    if (!img) {
      return './assets/img/no-image-banner.jpg';
    }

    const imgUrl = `${URL}/${size}${img}`;

    return imgUrl;
  }
}
