import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../post';
import { Location } from '@angular/common';

@Component({
  selector: 'app-delete-post',
  templateUrl: './delete-post.component.html',
  styleUrls: ['./delete-post.component.css']
})
export class DeletePostComponent implements OnInit {
  @Input() post: Post;
  @Input() postId: number;

  constructor(private postService: PostService,
    private route:ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
  }

  deletePost(): void {
    const id = this.postId;
    this.postService.deletePost(id).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
