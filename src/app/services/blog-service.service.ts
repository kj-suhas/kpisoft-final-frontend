import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Blog } from '../Blog';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {

  private BACKEND_BASE_URL = environment.BACKEND_BASE_URL;

  constructor(private http: HttpClient) {}

  public getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(`${this.BACKEND_BASE_URL}/all`)
    // http://localhost:8080/blog/all
    
  }

  public addBlog(blog: Blog): Observable<Blog> {
    // anime.id = anime.mal_id;
    return this.http.post<Blog>(`${this.BACKEND_BASE_URL}/add`, blog)
  }


  public updateBlog(blog: Blog): Observable<Blog> {
    return this.http.put<Blog>(`${this.BACKEND_BASE_URL}/update`, blog)
  }

  public deleteBlog(blogId: number): Observable<void> {
    return this.http.delete<void>(`${this.BACKEND_BASE_URL}/delete/${blogId}`);
  }

}
