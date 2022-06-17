import { Brand } from 'src/app/models/brand';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'brand'
})
export class BrandPipe implements PipeTransform {

  transform(value: Brand[], filterText:string): Brand[] {
    filterText=filterText?filterText.toLocaleLowerCase():""
    return filterText?value
    .filter((b:Brand)=>b.name.toLocaleLowerCase().indexOf(filterText)!==-1)
    :value;
  }

}
