import NumTo from '../src';
describe('number.test.ts', () => {
  it('cn start with 1', async () => {
    expect(NumTo(123456.89).cn()).toEqual('十二万三千四百五十六点八九');
  });
  it('cn whole ten', async () => {
    expect(NumTo(10).cn()).toEqual('十');
    expect(NumTo(100).cn()).toEqual('一百');
    expect(NumTo(1000).cn()).toEqual('一千');
    expect(NumTo(10000).cn()).toEqual('一万');
    expect(NumTo(100000).cn()).toEqual('十万');
    expect(NumTo(1000000).cn()).toEqual('一百万');
    expect(NumTo(10000000).cn()).toEqual('一千万');
    expect(NumTo(100000000).cn()).toEqual('一亿');
  });
  it('cn whole ten add 1', async () => {
    expect(NumTo(11).cn()).toEqual('十一');
    expect(NumTo(101).cn()).toEqual('一百零一');
    expect(NumTo(1001).cn()).toEqual('一千零一');
    expect(NumTo(10001).cn()).toEqual('一万零一');
    expect(NumTo(100001).cn()).toEqual('十万零一');
    expect(NumTo(1000001).cn()).toEqual('一百万零一');
    expect(NumTo(10000001).cn()).toEqual('一千万零一');
    expect(NumTo(100000001).cn()).toEqual('一亿零一');
  });
  it('cn whole ten add 1 and center with 1', async () => {
    expect(NumTo(11).cn()).toEqual('十一');
    expect(NumTo(111).cn()).toEqual('一百一十一');
    expect(NumTo(1111).cn()).toEqual('一千一百一十一');
    expect(NumTo(10101).cn()).toEqual('一万零一百零一');
    expect(NumTo(101101).cn()).toEqual('十万一千一百零一');
    expect(NumTo(1001001).cn()).toEqual('一百万一千零一');
    expect(NumTo(10011001).cn()).toEqual('一千零一万一千零一');
    expect(NumTo(100010001).cn()).toEqual('一亿零一万零一');
  });

  it('cn negative', async () => {
    expect(NumTo(-223456.89).cn()).toEqual('负二十二万三千四百五十六点八九');
  })
  
  it('cn start not with 1', async () => {
    expect(NumTo(223456.89).cn()).toEqual('二十二万三千四百五十六点八九');
  });
  it('cn start with 1 and with 0', async () => {
    expect(NumTo(1002034567.89).cn()).toEqual('十亿零二百零三万四千五百六十七点八九');
  });
  it('cn start not with 1 and with 0', async () => {
    expect(NumTo(20230456.89).cn()).toEqual('二千零二十三万零四百五十六点八九');
  });
  it('cn end with 0', async () => {
    expect(NumTo(4032101200).cn()).toEqual('四十亿三千二百一十万一千二百');
  });
  it('cn large number', async () => {
    expect(NumTo(40321012304.0102).cn()).toEqual('四百零三亿二千一百零一万二千三百零四点零一零二');
  });
});