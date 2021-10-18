import { Component, OnInit } from '@angular/core';
import { faHome, faGlobeAmericas, faTh, faThList, faAngleDown } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faHome = faHome;
  faGlobeAmericas = faGlobeAmericas;
  faTh = faTh;
  faThList = faThList;
  faAngleDown = faAngleDown;

  constructor() { }

  ngOnInit(): void {
  }

}
