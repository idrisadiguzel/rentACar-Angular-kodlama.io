import { Car } from './../models/car';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Car[], filterText:string): Car[] {
    filterText=filterText?filterText.toLocaleLowerCase():""
    return filterText?value
    .filter((c:Car)=>c.description.toLocaleLowerCase().indexOf(filterText)!==-1)
    :value;
  }

}
