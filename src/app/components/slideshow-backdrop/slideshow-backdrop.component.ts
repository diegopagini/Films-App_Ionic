import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Movie } from 'src/app/interfaces/interfaces';
import { DetailsComponent } from '../details/details.component';

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
