import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  private delete: boolean = false;
  private modal: string;
  private posts: Post[] = [];
  private actions = ["delete", "add", "edit"];
  private id: string;

  constructor(private postService: PostService,
    private route: ActivatedRoute) { 
      this.route.params.subscribe(({type, id}) =>  {
        if (this.actions.includes(type)){
          this.modal = type;
          this.id = id;
        }
      });
    };

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void{
    this.postService.getPosts()
      .subscribe(posts => this.posts = posts);
  }

}
