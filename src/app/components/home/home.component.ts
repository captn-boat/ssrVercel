import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  articles: Article[] = [];

  constructor(private articleService: ArticleService) {
  }

  ngOnInit() {
    this.articleService.getArticles().subscribe(articles => this.articles = articles);
  }
}
