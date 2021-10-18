import { Component, OnInit } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  faHome:any = faHome;

  constructor() { }

  ngOnInit(): void {
  }

  onOpenModal(anime: any, mode: string): void {
    const container = document.getElementById('main')
    const button = document.createElement('button')
    button.type = 'button'
    button.style.display = 'none'
    button.setAttribute('data-toggle', 'modal')
    if(mode === 'add') {
      console.log('im getting added')
      button.setAttribute('data-target', '#addBlogModal')
    }
    if(mode === 'edit') {
      // this.editAnime = anime
      button.setAttribute('data-target', '#editBlogModal')
    }
    if(mode === 'delete') {
      // this.deleteAnime = anime;
      button.setAttribute('data-target', '#deleteBlogModal')
    }
    container?.appendChild(button)
    button.click()
  }

}
