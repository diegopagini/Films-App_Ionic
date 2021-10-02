import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CreditsResponse, MovieDetail } from 'src/app/interfaces/interfaces';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  @Input() id: number;
  public movieDetails$: Observable<MovieDetail>;
  public movieCast$: Observable<CreditsResponse>;

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.movieDetails$ = this.moviesService.getMovieDetail(this.id);
    this.movieCast$ = this.moviesService.getMovieActors(this.id);
  }
}
