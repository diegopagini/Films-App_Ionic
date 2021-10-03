import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MovieDetail } from 'src/app/interfaces/interfaces';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent {
  @Input() movies: MovieDetail[];
  public slidesOpts: Object = {
    slidesPerView: 4,
    freeMode: true,
  };

  constructor(private modalController: ModalController) {}

  public async seeDetails(id: number) {
    const modal = await this.modalController.create({
      component: DetailsComponent,
      componentProps: {
        id,
      },
    });

    modal.present();
  }
}
