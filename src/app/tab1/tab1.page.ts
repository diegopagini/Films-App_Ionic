import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { MDBResponse, Movie } from '../interfaces/interfaces';
import { MoviesService } from '../services/movies.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit, OnDestroy {
  public moviesInTheatres: Movie[] = [];
  public slidesOpts: Object = {
    slidesPerView: 1.3,
    freeMode: true,
  };
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService
      .getMoviesInTheatres()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((resp: MDBResponse) => {
        this.moviesInTheatres = resp.results;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
