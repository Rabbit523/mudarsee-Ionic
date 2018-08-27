import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age-filter',
})
export class AgeFilter {

  transform(value, args) {
    var age = this.calculateAge(value);
    if (age == 0)
      return this.monthDiff(value, new Date()) + ' months';
    return age;
  }

  calculateAge(birthday) { // birthday is a date
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  monthDiff(d1, d2) {
    if (d1 < d2) {
      var months = d2.getMonth() - d1.getMonth();
      return months <= 0 ? 0 : months;
    }
    return 0;
  }
}
