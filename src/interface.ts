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
  zero?: boolean;
}