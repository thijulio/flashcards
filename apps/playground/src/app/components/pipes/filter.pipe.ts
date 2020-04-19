import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
    pure: false, // it has performance issues, avoid using it.
})
export class FilterPipe implements PipeTransform {
    public transform(value: any, filterString: string, propName: string): any {
        if (value.length === 0) {
            return value;
        }
        const resultArray = [];
        for (const item of value) {
            if (item[propName] === filterString) {
                resultArray.push(item);
            }
        }
        return resultArray;
    }
}
