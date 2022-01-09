# numto

强鲁棒性、极小、超快的数字互转库，支持阿拉伯、中文、英文数字互转，一百二十三点零四 = 123.04 = one hundred and twenty-three point zero four

## 使用

```bash
$ npm i numto --save
```

```ts

import NumTo from 'numto';

NumTo(123.04).cn()            // 一百二十三点零四
NumTo(123.04).en()            // one hundred and twenty-three point zero four
NumTo('一百二十三点零四').num()  // 123.04
NumTo('一百二十三点零四').en()   // one hundred and twenty-three point zero four
```

---

MIT LICENSE

