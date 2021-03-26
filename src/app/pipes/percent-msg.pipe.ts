import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentMsg',
})
export class PercentMsgPipe implements PipeTransform {
  transform(value: number, ...args: string[]): string {
    let msg: string = '';
    if (value === 0) {
      msg = ' TO-DO';
    } else if (value === 1) {
      msg = ' Completed';
    } else if (0 < value && value < 1) {
      msg = ' In Progress';
    }
    return args[0] + msg;
  }
}
