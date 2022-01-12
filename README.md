# numto

数字互转库，支持阿拉伯、中文数字互转，负一百二十三点零四 = -123.04 

[![npm](https://img.shields.io/npm/v/numto.svg?style=flat)](https://www.npmjs.org/package/numto)

<br />

## 使用

```bash
$ npm i numto --save
```

```ts

import NumTo from 'numto';

NumTo(40321012304.0102).cn()
// 四百零三亿二千一百零一万二千三百零四点零一零二


NumTo('四百零三亿二千一百零一万二千三百零四点零一零二').number()
// 40321012304.0102

```

---

MIT LICENSE

