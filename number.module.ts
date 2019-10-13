import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NegativeNumber} from '@src/app/shared/material/number/negative-number';
import {BigNumberPipe} from '@src/app/shared/material/number/big-number.pipe';


@NgModule({
    imports: [CommonModule],
    declarations: [NegativeNumber, BigNumberPipe],
    exports: [NegativeNumber, BigNumberPipe],
    providers: [BigNumberPipe]
})
export class NumberModule {}
