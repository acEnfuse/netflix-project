import { Component, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import { MoviesService } from './service/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  movies = new MoviesService();
  members = this.movies.getMovies();

  constructor(public dialog: MatDialog) {}

  openDialog({title, year, rating, runtime, genre, description}) {

    this.dialog.open(ModalComponent, {
      data: {
        title, year, rating, runtime, genre, description
      }
    });
  }
}
