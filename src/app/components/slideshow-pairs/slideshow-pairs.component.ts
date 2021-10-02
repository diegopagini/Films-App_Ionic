import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Movie } from 'src/app/interfaces/interfaces';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-slideshow-pairs',
  templateUrl: './slideshow-pairs.component.html',
  styleUrls: ['./slideshow-pairs.component.scss'],
})
export class SlideshowPairsComponent {
  @Input() movies: Movie[];
  @Output() loadMore: EventEmitter<any> = new EventEmitter();
  public slidesOpts: Object = {
    slidesPerView: 4,
    freeMode: true,
    spaceBetween: -10,
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

  public onClick() {
    this.loadMore.emit();
  }
}
