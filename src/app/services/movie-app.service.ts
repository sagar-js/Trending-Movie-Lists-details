import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface ApiResult{
  page:number;
  results:any[];
  total_pages:number;
  total_results:number;
}
@Injectable({
  providedIn: 'root'
})
export class MovieAppService {
  apiKey:any='a97243d7813d31446f6c43284e6854d5';
  baseUrl:any='https://api.themoviedb.org/3';
  images:any='https://image.tmdb.org/t/p';

  constructor(private http:HttpClient) { }

  // get list of movies
  getTopRatedMovies(page = 1):Observable<any>{
   return this.http.get<ApiResult>(`${this.baseUrl}/movie/popular?api_key=${this.apiKey}&page${page}`);
  }
 
  // get specific movie details
  getMovieDetails(id:any){
    return this.http.get(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`)
  }
}
