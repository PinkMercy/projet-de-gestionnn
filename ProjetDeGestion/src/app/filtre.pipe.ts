import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any[] , filterValue: any, propertyName:any,propertyName2:any): any[] {
   console.log('inside pipe: '+propertyName+' - '+filterValue );
 
    if (filterValue.length > 0 && filterValue !=='all') {
      const result =[];
      for (const element of value){

        if (element[propertyName].includes(filterValue) || element[propertyName2].includes(filterValue)) {

          result.push(element);
        }
      }
      return result;
    }

    return value;
  }
}