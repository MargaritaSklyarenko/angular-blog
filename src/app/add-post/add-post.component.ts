import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';
import { Location } from '@angular/common';
import { createOfflineCompileUrlResolver } from '@angular/compiler';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  private action: string;
  private id: number;
  private isEditMode: boolean;
  private post: Post;
  fullPostControl: FormGroup = <FormGroup>{}

  constructor(private postService: PostService,
    private location: Location,
    private route:ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(({type, id}) =>  {
      this.id = id;
      this.action = type;
      this.isEditMode = this.action === "edit" ? true : false;
      
      this.fullPostControl = new FormGroup({
        title: new FormControl(""),
        body: new FormControl("")
      });
  
      this.isEditMode && this.getPost();
    });
  }

  handleAddEdit () {
    if (this.isEditMode) {
      this.post.title = this.fullPostControl.value.title;
      this.post.body = this.fullPostControl.value.body;

      
      this.postService.editPost(this.post).subscribe(() => this.goBack());
    }
    else {
      this.postService.addPost({title: this.fullPostControl.value.title, body:this.fullPostControl.value.body}).subscribe(() => this.goBack());
    }
  }

  getPost(){
    this.postService.getPost(this.id)
      .subscribe(post => {
        this.post = post;
        this.fullPostControl = new FormGroup({
          title: new FormControl(this.post.title || ""),
          body: new FormControl(this.post.body || "")
        });
      });
  }

  goBack(): void {
    this.location.back();
  }
}
