import { Pipe, PipeTransform } from '@angular/core';
import { Item } from './Item';

@Pipe({
  name: 'itemName'
})
export class ItemNamePipe implements PipeTransform {

  transform(item: Item, ...args: unknown[]): string {
    if (item)
      return item.name;
    else
      return "";
  }

}
