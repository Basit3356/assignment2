import { Component, OnInit } from '@angular/core';
import { mylistService } from '../mylist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.page.html',
  styleUrls: ['./movie-list.page.scss'],
})
export class MovieListPage implements OnInit {

  constructor( private router: Router,
    private Mylistservice: mylistService ){ 
    
  }

  movies = [];

  ngOnInit() {
    
    
     this.movies = this.Mylistservice.getAllmovies();
  }

  changeUrl(user) {
    const id = user.id;
    const url = `movie-list/${id}`;

    this.router.navigateByUrl(url);

  
  }

 
}