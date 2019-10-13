import {Pipe, PipeTransform} from '@angular/core';
import {BigNumberPipe} from '@src/app/shared/material/number/big-number.pipe';

@Pipe({
    name: 'negNumber'
})
export class NegativeNumber implements PipeTransform {

    constructor(private _bigNumberPipe: BigNumberPipe) {

    }

    transform(value: number): string | number {
        if (value < 0) {
            return '(' + this._bigNumberPipe.transform(Math.abs(value)) + ')';
        }

        return this._bigNumberPipe.transform(value);
    }

}
