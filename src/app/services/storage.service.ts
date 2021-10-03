import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { MovieDetail } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  public movies: MovieDetail[] = [];

  constructor(
    private storage: Storage,
    private toastController: ToastController
  ) {
    this.storage.create();
    this.loadFavorites();
  }

  private async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 1500,
    });
    toast.present();
  }

  public saveMovie(movie: MovieDetail) {
    let exist: boolean = false;
    let message: string = '';
    for (const film of this.movies) {
      if (film.id === movie.id) {
        exist = true;
        break;
      }
    }

    if (exist) {
      this.movies = this.movies.filter((film: any) => film.id !== movie.id);
      message = 'Removido de favoritos';
    } else {
      this.movies.push(movie);
      message = 'Agregada a favoritos';
    }

    this.presentToast(message);
    this.storage.set('movies', this.movies);
    return !exist;
  }

  public async loadFavorites() {
    const movies = await this.storage.get('movies');
    this.movies = movies || [];
    return this.movies;
  }

  public async movieExist(id: number) {
    await this.loadFavorites();
    const exist = this.movies.find((film) => film.id === id);
    return exist ? true : false;
  }
}
