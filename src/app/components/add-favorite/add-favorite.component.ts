import { Component, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Article } from '../../models/article.model';
import { ArticleService } from '../../services/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-favorite',
  templateUrl: './add-favorite.component.html',
  styleUrls: ['./add-favorite.component.scss'],
})
export class AddFavoriteComponent {
  @Input()
  article!: Article;

  constructor(private authService: AuthService, private articleService: ArticleService, private router: Router) {
  }

  isFavorite() {
    if (this.authService.connectedUser) {
      return this.authService.connectedUser.favoriteArticleIds.includes(this.article._id);
    } else {
      return false;
    }
  }

  addFavorite() {
    if (this.authService.connectedUser) {
      this.articleService.addArticleToFavorite(this.article.url).subscribe((favoriteArticleIds) => {
        this.authService.connectedUser!.favoriteArticleIds = favoriteArticleIds;
      });
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  removeFavorite() {
    if (this.authService.connectedUser) {
      this.articleService.removeArticleToFavorite(this.article.url).subscribe((favoriteArticleIds) => {
        this.authService.connectedUser!.favoriteArticleIds = favoriteArticleIds;
      });
    } else {
      this.router.navigateByUrl('/login');
    }
  }
}
