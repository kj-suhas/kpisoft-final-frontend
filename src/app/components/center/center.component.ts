import { Component, OnInit } from '@angular/core';
import { faCheckSquare, faFilter } from '@fortawesome/free-solid-svg-icons';
import { BlogServiceService } from 'src/app/services/blog-service.service';


@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {
  faCheckSquare = faCheckSquare;
  faFilter = faFilter;
  centerBlogs: any = [];

  constructor(private blogService: BlogServiceService) { }

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe((response) => {
      console.log(response)
      this.centerBlogs = response.sort((a, b) => {
        return b.id - a.id;
      })
      console.log(this.centerBlogs)
      })
    }
}

