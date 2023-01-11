import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostsService } from '../shared/post.service';
import { AuthService } from '../shared/services/auth.service';
import { Post } from '../shared/interfaces'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {

  posts: Post[] = []
  pSub: Subscription

  constructor(private postsService:  PostsService) { }

  ngOnInit() {
    this.pSub = this.postsService.getAll().subscribe(posts => {
      this.posts = posts
    })
  }

  remove(id: string ) {

  }

  ngOnDestroy(): void {
    if (this.pSub) {
      this.pSub.unsubscribe()
    }
  }



}
