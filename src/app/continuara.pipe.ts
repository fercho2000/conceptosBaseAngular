import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'continuara'
})
export class ContinuaraPipe implements PipeTransform {

  transform(value: string): string {
    if (value.toString().length > 140) {
      value = value.substr(0, 150);
    }
    value+= "continuara ...";
    return value;
  }

}
