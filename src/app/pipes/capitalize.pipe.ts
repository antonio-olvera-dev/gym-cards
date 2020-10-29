import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {

    let tranform = '';
    const arr:string[] = value.split(' ');

    for (const item of arr) {
      tranform += (item[0].toUpperCase())+item.substr(1).toLowerCase();
      tranform += ' ';
    }

    return tranform;
  }

}
