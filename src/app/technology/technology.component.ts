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
  placeholderPic:string= 'https://image.shutterstock.com/image-vector/abstract-technology-logo-260nw-623206427.jpg'
  
  totalLength:any;
  page:any = 1;

  isFetching:boolean= false;
  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.isFetching= true
    this.newsService.getTehnologyNews().subscribe((resp:any)=>{
      this.news=resp.data;
      this.totalLength =resp.data.length;
      this.editMode = true;
      this.isFetching= false;
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
      console.log(this.news.sort(function(a,b):any{
        return  new Date(b.published_at).valueOf() - new Date(a.published_at).valueOf();
       }))
       this.editMode2= false;
    }else{
      this.news.sort(function(a,b):any{
        return  new Date(a.published_at).valueOf() - new Date(b.published_at).valueOf()
       });
       this.editMode2= true;
    };
  };
}
