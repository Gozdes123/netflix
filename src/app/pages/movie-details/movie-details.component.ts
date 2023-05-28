import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  constructor(
    private movieApiServiceService: MovieApiServiceService,
    private router: ActivatedRoute
  ) {}
  getMovieDetailResult: any;

  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    this.getMovie(getParamId);
  }

  getMovie(id: any) {
    this.movieApiServiceService.getMovieDetails(id).subscribe((result) => {
      this.getMovieDetailResult = result;
    });
  }
}
