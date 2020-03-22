import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  postagem: any = {};

  constructor(private postsService: PostsService, private activedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    if (this.activedRoute.snapshot.params['id'])
    this.postsService.buscarPorId(this.activedRoute.snapshot.params['id']).subscribe(res => this.postagem = res);

  }

  public adicionar() {
    this.postsService.adicionar(this.postagem).subscribe();
    this.router.navigate(['/posts']);
  }

  public atualizar() {
    this.postsService.atualizar(this.postagem).subscribe();
    this.router.navigate(['/posts']);
  }

}
