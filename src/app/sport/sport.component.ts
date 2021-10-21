import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { News } from '../shared';
import { map} from 'rxjs/operators';
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
  placeholderPic:string= 'data:image/png;base64,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'
  
  totalLength:any;
  page:any = 1;
  
  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getSportNews().pipe(map((resp:any)=>{
      return resp.data;
    })).subscribe((news:News[])=>{
      this.editMode = true;
      console.log(news)
      this.news=news;
      this.totalLength= news.length;
    })
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
