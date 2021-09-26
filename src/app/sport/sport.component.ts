import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { News } from '../shared';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.scss'],
})
export class SportComponent implements OnInit {
  news: News[] = [];
  inputValue: string;
  editMode:boolean = false;
  editMode2: boolean= true;
  placeholderPic:string= 'https://lh3.googleusercontent.com/proxy/fF_A3G8FSCTSr5NC53qRRtotWSj1vPj8SmRqL6czeVZmSKIIFl1m59LCIGsKT9Rrlx4FS7ZyyBbBV35WbWQqB-hdPd9jT4Tnb5QxclWgj8qR7L9x'
  
  totalLength:any;
  page:any = 1;
  
  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getSportNews().subscribe((resp: any) => {
      this.editMode = true;
      this.news = resp.data;
      this.totalLength =resp.data.length;
    });
  }
  newLen() {
    if (this.editMode) {
      this.news = [];
      this.newsService.getEnSportNews().subscribe((resp: any) => {
        this.news = resp.data;
        this.editMode = false;
      });
    }else{
      this.newsService.getSportNews().subscribe((resp:any)=>{
        this.news= resp.data;
        this.editMode=true;
      });
    };
  }
  latestOldest(){
    if(this.editMode2){
      this.news.sort(function(a,b):any{
        return  new Date(b.published_at).valueOf() - new Date(a.published_at).valueOf();
       });
       this.editMode2= false;
    }else{
       this.news.sort(function(a,b):any{
        return  new Date(a.published_at).valueOf() - new Date(b.published_at).valueOf();
       });
       this.editMode2= true;
    };
  };
}
