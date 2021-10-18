import { Component, OnInit } from '@angular/core';
import {faEllipsisH } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-rightsidebar',
  templateUrl: './rightsidebar.component.html',
  styleUrls: ['./rightsidebar.component.css']
})
export class RightsidebarComponent implements OnInit {
  faEllipsisH = faEllipsisH;

  constructor() { }

  ngOnInit(): void {
  }

}
