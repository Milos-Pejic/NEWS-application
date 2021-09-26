import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    console.log(items, searchText)
  if (!items) {
    return [];
  }
  if (!searchText) {
    return items;
  }
  searchText = searchText.toLocaleLowerCase();

  return items.filter(it => {
    return it.title.toLocaleLowerCase().includes(searchText);
  });
}

}
