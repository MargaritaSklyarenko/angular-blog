import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { HeaderComponent } from './header/header.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { AddPostComponent } from './add-post/add-post.component';
import { HttpClientModule } from '@angular/common/http';
import { DeletePostComponent } from './delete-post/delete-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostComponent,
    HeaderComponent,
    PostDetailsComponent,
    AddPostComponent,
    DeletePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
