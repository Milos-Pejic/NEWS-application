import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule}  from '@angular/common/http'
import {NgxPaginationModule} from 'ngx-pagination';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SportComponent } from './sport/sport.component';
import { TechnologyComponent } from './technology/technology.component';
import { HeaderComponent } from './header/header.component';
import { SearchPipe } from './pipe/search.pipe';
import { FormsModule } from '@angular/forms';
import { ShortenAuthorPipe } from './pipe/shorten-title.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SportComponent,
    TechnologyComponent,
    HeaderComponent,
    SearchPipe,
    ShortenAuthorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
