import { Component } from '@angular/core';
import { Genre, MovieDetail } from 'src/app/interfaces/interfaces';
import { MoviesService } from 'src/app/services/movies.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  public movies: MovieDetail[] = [];
  public genres: Genre[] = [];
  public favoritesByGenre: any[] = [];

  constructor(
    private storageService: StorageService,
    private moviesService: MoviesService
  ) {}

  // Se ejecuta cada vez que se entra nuevamente, en el OnInit no funciona
  async ionViewWillEnter() {
    this.movies = await this.storageService.loadFavorites();
    this.genres = await this.moviesService.loadGenres();
    this.getMoviesByGenre(this.genres, this.movies);
  }

  private getMoviesByGenre(genres: Genre[], movies: MovieDetail[]) {
    this.favoritesByGenre = [];

    genres.forEach((genre: Genre) => {
      this.favoritesByGenre.push({
        genre: genre.name,
        movies: movies.filter((movie) =>
          movie.genres.find((el) => el.id === genre.id)
        ),
      });
    });
  }
}
