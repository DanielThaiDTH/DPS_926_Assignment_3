import { Pipe, PipeTransform } from '@angular/core';


/**
 * Used to remove the DST from the time string. Also converts a 
 * null date to an empty string.
 */
@Pipe({
  name: 'dateString'
})
export class DateStringPipe implements PipeTransform {

  transform(value: Date, ...args: unknown[]): string {
    if (value)
      return value.toString().split("(")[0];
    return "";
  }

}
