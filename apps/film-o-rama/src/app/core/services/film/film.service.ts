import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Film } from '../../../films/models/film.model';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private apiUrl = 'http://www.omdbapi.com/';

  constructor(private http: HttpClient) {}

  searchByTittle(query: string): Observable<object> {
    const params = new HttpParams().set('apikey', 'f12ba140').set('s', query).set('type', 'movie');
    return this.http.get<object>(this.apiUrl, { params });
  }
}
