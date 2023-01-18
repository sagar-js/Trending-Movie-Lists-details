import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieAppService } from 'src/app/services/movie-app.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
 
  // aoi key 
  apiKey: any = 'a97243d7813d31446f6c43284e6854d5';

  // website url
  baseUrl: any = 'https://api.themoviedb.org/3';

  //  images path
  images: any = 'https://image.tmdb.org/t/p';

  //  empty array
  movie: any;

  //  extract images to imageBaseUrl
  imageBaseUrl = this.images;

  // Dependancy Injection
  constructor(private movieService: MovieAppService, private route: ActivatedRoute) { }

  // initialize function
  ngOnInit() {
   
    // get specific id  
    const id = this.route.snapshot.paramMap.get('id');

    // details of specific id
    this.movieService.getMovieDetails(id).subscribe((res) => {
      console.log(res);
      this.movie = res;
    })
  }

  // goto homepage
  openHomepage() {
    window.open(this.movie.homepage);
  }

}
