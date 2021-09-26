import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { News } from '../shared';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {
  news: News[]=[]
  inputValue:string;
  editMode = false;
  editMode2= true;
  placeholderPic:string= 'https://thumbs.dreamstime.com/z/abstract-futuristic-hi-tech-background-blue-light-effects-round-placeholder-sci-fi-glowing-sphere-technology-digital-224692604.jpg'
  
  totalLength:any;
  page:any = 1;
  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getTehnologyNews().subscribe((resp:any)=>{
      console.log(resp.data);
      this.totalLength =resp.data.length;
      this.news= resp.data;
    })
  }
  newLen() {
    if (this.editMode) {
      this.news = [];
      this.newsService.getEnTehnologyNews().subscribe((resp: any) => {
        this.news = resp.data;
        this.editMode = false;
      });
    }else{
      this.newsService.getTehnologyNews().subscribe((resp:any)=>{
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
        return  new Date(a.published_at).valueOf() - new Date(b.published_at).valueOf()
       });
       this.editMode2= true;
    };
  };
}
