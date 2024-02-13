import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article.model';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
})
export class FavoriteComponent implements OnInit {
  articles: Article[] = [];

  constructor(private articleService: ArticleService) {
  }

  ngOnInit() {
    this.articleService.getFavoriteArticles().subscribe(articles => this.articles = articles);
  }
}
