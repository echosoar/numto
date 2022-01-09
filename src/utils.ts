import { langDefine, langDefineUnit } from "./interface"

export const cnDefine: langDefine = {
  number: ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'],
  unit: [
    {
      text: '十',
      mag: 10,
    },
    {
      text: '百',
      mag: 100,
    },
    {
      text: '千',
      mag: 1000,
    },
    {
      text: '万',
      baseline: true,
      mag: 10000,
    },
  ],
  format: (value: string): string => {
    value = value.replace(/零{1,}/g, '零');
    value = value.replace(/^一十/g, '十');
    value = value.replace(/零万/g, '万');
    value = value.replace(/亿万/g, '亿');
    return value;
  },
  unitMap: {
    '万万': '亿',
  },
}

export const defineToStr = (numberList: number[], langDefine: langDefine) => {
  numberList = Array.from(numberList).reverse();
  // remove latest zero
  let notZeroIndex = 0;
  while(numberList[notZeroIndex] === 0) {
    notZeroIndex ++;
  }
  let langUnit: langDefineUnit[] = [];
  while (langDefine.unit.length && langUnit.length < numberList.length) {
    const lastIndex = langDefine.unit.length - 1;
    for(const unitIndex in langDefine.unit) {
      const unit = langDefine.unit[unitIndex];
      const newUnit = {...unit};
      if (langUnit.length > langDefine.unit.length && +unitIndex === lastIndex) {
        newUnit.text = newUnit.text + langDefine.unit[lastIndex].text;

        if (langDefine.unitMap[newUnit.text]) {
          newUnit.text = langDefine.unitMap[newUnit.text];
        }
      }
      langUnit.push(newUnit);
    }
  }

  const numberStrList: string[] = [];
  for(let index = 0; index < numberList.length; index ++) {
    const currentNumber = numberList[index];
    let numberStr = langDefine.number[currentNumber];
    let unit = '';
    if (index > 0) {
      const unitInfo = langUnit[index - 1];
      if (currentNumber === 0) {
        if (unitInfo.baseline) {
          numberStr = '';
          unit = unitInfo.text;
        }
      } else {
        unit = unitInfo.text;
      }
    }
    if (numberStr && index <notZeroIndex) {
      continue;
    }
    numberStrList.unshift(`${numberStr}${unit}`);
  }
  return langDefine.format(numberStrList.join(''));
}

export const transfromNumber = (num: number[], langDefine: langDefine) => {
  return num.map(num => langDefine.number[num]).join('');
}