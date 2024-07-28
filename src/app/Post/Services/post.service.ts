import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Post } from '../PostStore/post.state';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http
      .get<Post[]>('https://oshop-aac6a-default-rtdb.firebaseio.com/Posts.json')
      .pipe(
        map((data) => {
          const posts: Post[] = [];
          console.log(data);
          for (let id in data) {
            posts.push({ ...data[id], id: id });
          }
          return posts;
        })
      );
  }

  addPost(post: Post): Observable<{ name: string }> {
    return this.http
      .post<{ name: string }>(
        'https://oshop-aac6a-default-rtdb.firebaseio.com/Posts.json',
        post
      )
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  updatePost(post: Post): Observable<Post> {
    return this.http
      .put<Post>(
        `https://oshop-aac6a-default-rtdb.firebaseio.com/Posts/${post.id}.json`,
        post
      )
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  deletePost(id: string | number) {
    return this.http.delete(
      `https://oshop-aac6a-default-rtdb.firebaseio.com/Posts/${id}.json`
    );
  }
}
