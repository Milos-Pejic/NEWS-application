
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenAuthor'
})
export class ShortenAuthorPipe implements PipeTransform {
  transform(value:any){
    if(value.length> 15){
      return value.substr(0,15) + ' ...'
    }
    return value
  };

}
