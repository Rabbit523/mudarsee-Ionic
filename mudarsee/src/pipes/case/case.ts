import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'case',
})
export class CasePipe implements PipeTransform {

  transform(value: string, ...args) {
    var frags = value.split('_');
    for (var i = 0; i < frags.length; i++) {
      frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
    }
    return frags.join(' ');



  }
}
