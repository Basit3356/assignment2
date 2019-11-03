import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { AlertController } from '@ionic/angular';
import { mylistService } from '../mylist.service';



@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.page.html',
  styleUrls: ['./add-movie.page.scss'],
})
export class AddMoviePage implements OnInit {
  name: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private mylistService: mylistService
  ) { }

  movies = [];
  id: string;
  catagory: string;
  release: string;

  ngOnInit() { }

  Addmovie() {
    const obj = {
      'id': "123as",
      'name': this.name,
      'Release': this.release,
      'Catagory': this.catagory
    };

    this.mylistService.movies.push(obj);
    this.router.navigateByUrl("/movie-list");
  }
}
