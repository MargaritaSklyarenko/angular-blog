import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from './post';
import { Observer, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private httpOptions = {};

  constructor(private _http: HttpClient) { 
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
  }

  getPosts(): Observable<any> {
    //JSONPlaceholder Fake Online REST API for Testing and Prototyping
    return this._http.get("http://localhost:3000/posts"); 
  }

  getPost(id: Post["id"]): Observable<any> {
    return this._http.get("http://localhost:3000/posts/"+id); 
  }

  addPost(post) {
    return this._http.post("http://localhost:3000/posts", post, this.httpOptions);
  }

  deletePost(id: Post["id"]) {
    return this._http.delete('http://localhost:3000/posts/'+id)
  }

  editPost(post: Post) {
    return this._http.put('http://localhost:3000/posts/'+post.id, post, this.httpOptions)
  }
}
