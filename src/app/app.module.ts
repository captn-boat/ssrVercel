import { LOCALE_ID, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ArticleComponent } from './components/article/article.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import localeFr from '@angular/common/locales/fr';
import { CommonModule, DatePipe, registerLocaleData } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { AddFavoriteComponent } from './components/add-favorite/add-favorite.component';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import { CookieService } from 'ngx-cookie-service';
import { BrowserModule } from '@angular/platform-browser';

registerLocaleData(localeFr, 'fr-FR');

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ArticleComponent,
    NavbarComponent,
    LoginComponent,
    FavoriteComponent,
    AddFavoriteComponent,
    ArticleCardComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    DatePipe,
  ],
  providers: [
    CookieService,
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
