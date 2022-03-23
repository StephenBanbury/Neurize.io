import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  youtubeUrl = 'https://www.youtube.com/watch?v=tOAWTTjs6go';
  youtubeId = 'tOAWTTjs6go';

  constructor(
  ) {
  }

  ngOnInit(): void {
  }

}
