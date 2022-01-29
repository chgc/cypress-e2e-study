import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './app.component';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: Todo[], filterCondition: string): Todo[] {
    if (!filterCondition) return value;
    return value.filter(
      (x) => x.isCompleted === (filterCondition === 'completed')
    );
  }
}
