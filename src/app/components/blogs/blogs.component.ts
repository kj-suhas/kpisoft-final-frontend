import { Component, OnInit } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';
import { BlogServiceService } from 'src/app/services/blog-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Blog } from 'src/app/Blog';
import { Router } from '@angular/router';



@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  faHome:any = faHome;
  blogs:any = [];
  deleteBlog:any;
  editBlog:any;
  constructor(private blogService: BlogServiceService, private router: Router) { }

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe((response) => {
      console.log(response);
      this.blogs = response.sort((a:Blog,b:Blog) => {
        return b.id - a.id;
      });
    })
  }

  onOpenModal(blog: any, mode: string): void {
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
      this.editBlog = blog
      button.setAttribute('data-target', '#editBlogModal')
    }
    if(mode === 'delete') {
      this.deleteBlog = blog;
      button.setAttribute('data-target', '#deleteBlogModal')
    }
    container?.appendChild(button)
    button.click()
  }

  public onAddBlog(addForm: NgForm): void {
    console.log(addForm.value)
    document.getElementById('add-blog-form')?.click()
    this.router.navigateByUrl('')
    this.blogService.addBlog(addForm.value).subscribe((response: any) => {
      this.blogs.unshift(response)
      this.blogService.getBlogs().subscribe((response: any) => {
        this.blogs = response.sort((a:Blog,b:Blog) => {
          return b.id - a.id;
        })
        addForm.reset()
      })
    },
    (error: HttpErrorResponse) => {
      addForm.reset()
      console.log(error.message)
    }
    )
  }


  public onUpdateBlog(blog: Blog): void {
    console.log(blog)
    this.blogService.updateBlog(blog).subscribe((response: any) => {
      console.log(response);
      this.blogService.getBlogs().subscribe((response) => {
        this.blogs = response.sort((a:Blog, b:Blog) => {
          return b.id - a.id;
        })
      })
    },
    (error: HttpErrorResponse) => {
      console.log(error.message)
    }
    )
  }

  public onDeleteBlog(blog: any): void {
    console.log(blog)
    this.blogService.deleteBlog(blog.id).subscribe((response: any) => {
      console.log(response);
      this.blogService.getBlogs().subscribe((response) => {
        this.blogs = response.sort((a:Blog, b:Blog) => {
          return b.id - a.id;
        })
      })
    },
    (error: HttpErrorResponse) => {
      console.log(error.message)
    }
    )
  }

}
