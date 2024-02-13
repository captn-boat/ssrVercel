import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  article?: Article;

  constructor(private articleService: ArticleService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const articleUrl = paramMap.get('articleUrl')!;
      this.articleService.getArticle(articleUrl).subscribe(article => {
        this.article = article;
      });
    });
  }
}
