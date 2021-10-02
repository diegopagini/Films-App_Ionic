export interface MDBResponse {
  page: number;
  totalResults: number;
  totalPages: number;
  results: Movie[];
}

export interface Movie {
  voteCount: number;
  id: number;
  video: boolean;
  voteAverage: number;
  title: string;
  popularity: number;
  posterPath: string;
  originalLanguage: string;
  originalTitle: string;
  genreIds: number[];
  backdropPath?: string;
  adult: boolean;
  overview: string;
  releaseDate: string;
}
