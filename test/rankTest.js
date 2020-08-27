const rankTest = require('ava');
const {voyageProfitFactor} = require('../src/rank');
rankTest('test voyageProfitFactor voyage.zone=china and voyage.length=13 and history is null',
  t => {
    const voyage = {
      zone: 'china',
      length: 13
    }
    const history = []
    const result = voyageProfitFactor(voyage, history);
    t.is(result, 3);
  })