import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { DetailsComponent } from 'src/app/components/details/details.component';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  public textSearch: string;
  public ideas: string[] = [
    'Avengers',
    'El señor de los anillos',
    'Spiderman',
    'La vida es bella',
    'Titanic',
    'Navidad',
  ];
  public movie$: Observable<any>;
  public searching: boolean = false;

  constructor(
    private moviesService: MoviesService,
    private modalController: ModalController
  ) {}

  ngOnInit(): void {
    this.ideas.sort();
  }

  public search(event): void {
    const value: string = event.detail.value;
    if (value.length === 0) {
      this.searching = false;
      this.movie$ = of('');
    } else {
      this.searching = true;
      setTimeout(() => {
        this.movie$ = this.moviesService.getMovie(value);
        this.searching = false;
      }, 1000);
    }
  }

  public searchIdea(idea: string): void {
    this.textSearch = idea;
  }

  public async seeDetails(id: string) {
    const modal = await this.modalController.create({
      component: DetailsComponent,
      componentProps: {
        id,
      },
    });

    modal.present();
  }
}
