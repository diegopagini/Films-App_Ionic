import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MDBResponse } from '../interfaces/interfaces';

const apiKey: string = environment.apiKey;
const baseUrl: string = environment.baseUrl;

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private moviesInTheatres: string;
  constructor(private http: HttpClient) {
    this.getCurrentDate();
  }

  public getMoviesInTheatres(): Observable<MDBResponse> {
    return this.http.get<MDBResponse>(
      `${baseUrl}${this.moviesInTheatres}&api_key=${apiKey}`
    );
  }

  private getCurrentDate() {
    const currentDateMinusOneMonth: string = this.formatDate(new Date(), false);
    const currentDate: string = this.formatDate(new Date(), true);
    this.moviesInTheatres = `/discover/movie?primary_release_date.gte=${currentDateMinusOneMonth}&primary_release_date.lte=${currentDate}`;
  }

  private formatDate(date: Date, actual: boolean) {
    const d = new Date(date);
    let month: string = actual ? '' + (d.getMonth() + 1) : '' + d.getMonth();
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) {
      month = '0' + month;
    }
    if (day.length < 2) {
      day = '0' + day;
    }

    return [year, month, day].join('-');
  }
}
