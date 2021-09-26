import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
 
  key:string="ed1a36e7d71a9094e8b8515000a67523"
  urlTechnology:string=`http://api.mediastack.com/v1/news?access_key=${this.key}&categories=technology`
  urlSport:string=`http://api.mediastack.com/v1/news?access_key=${this.key}&categories=sports`
  urlEnTechnology:string=`http://api.mediastack.com/v1/news?access_key=${this.key}&categories=technology, technology&languages=en,-de`
  urlEnSport:string=`http://api.mediastack.com/v1/news?access_key=${this.key}&categories=sports, technology&languages=en,-de`
  constructor( private http:HttpClient) { }
    getTehnologyNews(){
    return  this.http.get(this.urlTechnology);
    }
    getSportNews(){
      return this.http.get(this.urlSport);
    }
    getEnTehnologyNews(){
      return this.http.get(this.urlEnTechnology);
    }
    getEnSportNews(){
      return this.http.get(this.urlEnSport);
    }

}
