import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'bigNumber'
})
export class BigNumberPipe implements PipeTransform {

    transform(value: any): string {
        const b = +value;
        let d;
        if (b > 1000000000) {
            d = this._addCommas(Math.round(b / 1000000) / 1000) + ' B';
        } else {
            if (b > 1000000) {
                d = this._addCommas(Math.round(b / 1000) / 1000) + ' M';
            } else {
                d = this._addCommas(value);
            }
        }
        return d;
    }

    private _addCommas(a): string {
        a = a.toString();
        const DECIMAL = 2;
        const x = a.split('.');
        let x1 = x[0];
        const x2 = x.length > 1 ? (parseInt(x[1], 10) !== 0 ? '.' + x[1].substring(0, DECIMAL) : '') : '';
        const b = /(\d+)(\d{3})/;
        while (b.test(x1)) {
            x1 = x1.replace(b, '$1,$2');
        }
        return x1 + x2;
    }
}
