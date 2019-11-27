export interface Rating {
  Source: string;
  Value: string;
}

export interface Film {
  Title: string;
  Year: string;
  Poster: string;
  Type: string;
  imdbID: string;
  fav?: boolean;
}

export interface FilmDetail extends Film {
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

export interface FilmAPIResponse {
  Response: string;
  Search?: Film[];
  Error?: string;
  totalResult?: number;
}
