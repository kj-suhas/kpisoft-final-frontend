import { Component, OnInit } from '@angular/core';
import { faCheckSquare, faFilter } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {
  faCheckSquare = faCheckSquare;
  faFilter = faFilter;

  constructor() { }

  ngOnInit(): void {
  }

}
