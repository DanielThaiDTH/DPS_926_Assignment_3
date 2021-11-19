import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateString'
})
export class DateStringPipe implements PipeTransform {

  transform(value: Date, ...args: unknown[]): string {
    if (value)
      return value.toString();
    return "";
  }

}
