import { Component, OnInit } from '@angular/core';
import { Genre, MovieDetail } from 'src/app/interfaces/interfaces';
import { MoviesService } from 'src/app/services/movies.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  public movies: MovieDetail[] = [];
  public genres: Genre[] = [];

  constructor(
    private storageService: StorageService,
    private moviesService: MoviesService
  ) {}

  async ngOnInit() {
    this.movies = await this.storageService.loadFavorites();
    this.genres = await this.moviesService.loadGenres();
  }
}
