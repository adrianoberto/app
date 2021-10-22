import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCurrency'
})
export class CustomCurrencyPipe implements PipeTransform {

  transform(value: number, currency: string = '') {
    if(!value) {
      value = 0;
    }

    if(currency) {
      return  value.toLocaleString('pt-br',{style: 'currency', currency: currency});
    } else {
      return value.toLocaleString('pt-br', {minimumFractionDigits: 2, maximumFractionDigits: 2});
    }
  }

}


