import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CreditsResponse, MovieDetail } from 'src/app/interfaces/interfaces';
import { MoviesService } from 'src/app/services/movies.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit, OnDestroy {
  @Input() id: number;
  public movieDetails$: Observable<MovieDetail>;
  public movieCast$: Observable<CreditsResponse>;
  public hidden = 150;
  public slidesOpts: Object = {
    slidesPerView: 3.3,
    freeMode: true,
  };
  public star: string = 'star-outline';
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(
    private moviesService: MoviesService,
    private modalController: ModalController,
    private storageService: StorageService
  ) {}

  async ngOnInit() {
    this.movieDetails$ = this.moviesService.getMovieDetail(this.id);
    this.movieCast$ = this.moviesService.getMovieActors(this.id);

    this.storageService
      .movieExist(this.id)
      .then((exist) => (this.star = exist ? 'star' : 'star-outline'));
  }

  public back() {
    this.modalController.dismiss();
  }

  public favorite() {
    this.movieDetails$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((movie: MovieDetail) => {
        const exist = this.storageService.saveMovie(movie);
        this.star = exist ? 'star' : 'star-outline';
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
