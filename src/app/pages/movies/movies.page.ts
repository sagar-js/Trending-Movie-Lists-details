// import component
import { Component, OnInit } from '@angular/core';

// ionic feature
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';

// import api result services
import { ApiResult, MovieAppService } from 'src/app/services/movie-app.service';

// envronment file for secreate logic or data
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  // apikeey for fetch data of movielist
  apiKey: any = 'a97243d7813d31446f6c43284e6854d5';

  // url of website
  baseUrl: any = 'https://api.themoviedb.org/3';

  // fetch images
  images: any = 'https://image.tmdb.org/t/p';

  // create empty movies array to store fetch data
  movies: any[] = [];

  // running page number
  currentPage = 1;

  // extract images to imagebaseUrl
  imageBaseUrl = this.images;

  // Dependancy Injection movie service & loadingCtrl
  constructor(private movieService: MovieAppService, private loadingCtrl: LoadingController) { }

  // loadmovies lists immegdiate after page run
  ngOnInit() {
    // function to load movies
    this.loadMovies();
  }

  // load movies asynchronusly
  async loadMovies() {
    // create method for loading
    const loading = await this.loadingCtrl.create({
      message: 'Loading....',
      spinner: 'bubbles',
    });

    // loadin available current year movie
    await loading.present();

    // get top rated moviesList
    this.movieService.getTopRatedMovies(this.currentPage).subscribe((res) => {
      // dismiss loading after complete
      loading.dismiss();

      // add all results of top rated movies into movies array
      this.movies = [...this.movies, ...res.results];
    });
  }
}
