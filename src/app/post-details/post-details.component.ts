import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  @Input() post: Post;

  constructor(private postService: PostService,
    private route:ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.getPost();
  }

  getPost(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.postService.getPost(id)
      .subscribe(post => this.post = post);
  }

  goBack(): void {
    this.location.back();
  }

}
