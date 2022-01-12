import { cnDefine, defineToStr, transfromNumber } from "./utils";

class NumTo {
  integer: number[] = [];
  decimal: number[] = [];
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
    } else if (/^[零一二两三四五六七八九十百千万亿点负]+$/.test(num)) {
      if (num[0] === '负') {
        this.isNegative = true;
        num = num.slice(1);
      }
      const numberParts = num.replace(/两/g, '二').split('点');

      let number = 0;
      let baseMag = 1;
      let currentMag = 1;
      const integerPart = numberParts[0]?.split('') || [];
      if (integerPart[0] === '十') {
        integerPart.unshift('一');
      }
      const units = cnDefine.unit.concat({
        text: '亿',
        baseline: true,
        mag: 100000000,
      });
      while(integerPart.length) {
        const lastNum = integerPart.pop();
        const isUnit = units.find(unitInfo => unitInfo.text === lastNum);
        if (isUnit) {
          if (isUnit.baseline) {
            if (isUnit.mag > baseMag) {
              baseMag = isUnit.mag
            } else {
              baseMag *= isUnit.mag;
            }
            currentMag = 1;
          } else {
            currentMag = isUnit.mag;
          }
        } else {
          const currentNum = cnDefine.number.findIndex(num => num === lastNum);
          number += currentNum * baseMag * currentMag;
        }
      }
      this.integer = String(number).split('').map(numStr => +numStr);
      if (numberParts[1]) {
        this.decimal = numberParts[1].split('').map(numStr => {
          return cnDefine.number.findIndex(num => num === numStr);
        });
      }
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