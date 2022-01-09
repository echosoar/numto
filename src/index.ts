import { cnDefine, defineToStr, transfromNumber } from "./utils";

class NumTo {
  integer: number[];
  decimal: number[];
  isNegative = false;
  constructor(num: string) {
    if (/^-?\d+(?:\.\d+)?/.test(num)) {
      if (num[0] === '-') {
        this.isNegative = true;
        num= num.slice(1)
      }
      const numberParts = num.split('.');
      const integerPart = numberParts[0].replace(/^0+/, '')
      if (integerPart) {
        this.integer = integerPart.split('').map(numStr => +numStr);
      }
      const decimalPart = numberParts[1]?.replace(/0+$/, '');
      if (decimalPart) {
        this.decimal = decimalPart.split('').map(numStr => +numStr);
      }
    } else if (/[零一二三四五六七八九十]/.test(num)) {

    }
  }

  public number() {
    return Number(`${this.isNegative ? '-' : ''}${this.integer.length ? this.integer.join('') : 0}${this.decimal.length ? `.${this.decimal.join('')}` : ''}`);
  }

  public cn() {
    const negative = this.isNegative ? '负' : '';
    const integer = defineToStr(this.integer, cnDefine);
    if (!this.decimal?.length) {
      return negative + integer;
    }
    return negative + integer + '点' + transfromNumber(this.decimal, cnDefine);
  }
}

export default (num: number | string)  => {
  return new NumTo(String(num));
}