export interface langDefine {
  number: string[];
  unit: langDefineUnit[];
  format: (value: string) => string;
  unitMap: {
    [value: string]: string;
  }
}

export interface langDefineUnit {
  text: string;
  baseline?: boolean; // 基线，如果是基线，总倍率以此为基线
  mag: number; // 计算倍率
}