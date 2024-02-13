import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../models/article.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {

  constructor(private httpClient: HttpClient) {
  }

  getArticles() {
    return this.httpClient.get<Article[]>(`${environment.apiUrl}/articles`);
  }

  getArticle(articleUrl: string) {
    return this.httpClient.get<Article>(`${environment.apiUrl}/articles/${articleUrl}`);
  }

  getFavoriteArticles() {
    return this.httpClient.get<Article[]>(`${environment.apiUrl}/articles/favorites`);
  }

  addArticleToFavorite(articleUrl: string) {
    return this.httpClient.post<number[]>(`${environment.apiUrl}/articles/${articleUrl}/favorite`, null);
  }

  removeArticleToFavorite(articleUrl: string) {
    return this.httpClient.post<number[]>(`${environment.apiUrl}/articles/${articleUrl}/unfavorite`, null);
  }
}
