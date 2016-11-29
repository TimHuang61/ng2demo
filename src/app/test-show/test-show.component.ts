import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-show',
  templateUrl: './test-show.component.html',
  styleUrls: ['./test-show.component.css']
})
export class TestShowComponent implements OnInit {

  myText: string;

  constructor() {
    this.myText = "I am Tim";
  }

  ngOnInit() {

  }
}
