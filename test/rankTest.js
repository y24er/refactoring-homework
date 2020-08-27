const rankTest = require('ava');
const { voyageProfitFactor } = require('../src/rank');
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

rankTest('test voyageProfitFactor voyage.zone=east-indies and voyage.length=13 and history is null',
  t => {
    const voyage = {
      zone: 'east-indies',
      length: 13
    }
    const history = []
    const result = voyageProfitFactor(voyage, history);
    t.is(result, 3);
  })

rankTest('test voyageProfitFactor voyage.zone is china and voyage.length is 13 and history has china and history.length is 10',
  t => {
    const voyage = {
      zone: 'china',
      length: 13
    }
    const history = new Array(10);
    history[0] = {
      zone: 'china',
      profit: 10
    }
    const result = voyageProfitFactor(voyage, history);
    t.is(result, 7);
  })

rankTest('test voyageProfitFactor voyage.zone is china and voyage.length is 13 and history has china and history.length is 10',
  t => {
    const voyage = {
      zone: 'china',
      length: 13
    }
    const history = new Array(10);
    history[0] = {
      zone: 'china',
      profit: 10
    }
    const result = voyageProfitFactor(voyage, history);
    t.is(result, 7);
  })

rankTest('test voyageProfitFactor voyage.zone is china and voyage.length is 13 and history has china and history.length is 11',
  t => {
    const voyage = {
      zone: 'china',
      length: 13
    }
    const history = new Array(11);
    history[0] = {
      zone: 'china',
      profit: 10
    }
    const result = voyageProfitFactor(voyage, history);
    t.is(result, 8);
  })

rankTest('test voyageProfitFactor voyage.zone is china and voyage.length is 18 and history has china and history.length is 11',
  t => {
    const voyage = {
      zone: 'china',
      length: 18
    }
    const history = new Array(11);
    history[0] = {
      zone: 'china',
      profit: 10
    }
    const result = voyageProfitFactor(voyage, history);
    t.is(result, 8);
  })

rankTest('test voyageProfitFactor voyage.zone is china and voyage.length is 19 and history has china and history.length is 11',
  t => {
    const voyage = {
      zone: 'china',
      length: 19
    }
    const history = new Array(11);
    history[0] = {
      zone: 'china',
      profit: 10
    }
    const result = voyageProfitFactor(voyage, history);
    t.is(result, 7);
  })

rankTest('test voyageProfitFactor voyage.zone is west-indies and voyage.length is 15 and history has china and history.length is 8',
  t => {
    const voyage = {
      zone: 'west-indies',
      length: 15
    }
    const history = new Array(8);
    history[0] = {
      zone: 'china',
      profit: 10
    }
    const result = voyageProfitFactor(voyage, history);
    t.is(result, 1);
  })

rankTest('test voyageProfitFactor voyage.zone is west-indies and voyage.length is 15 and history has china and history.length is 9',
  t => {
    const voyage = {
      zone: 'west-indies',
      length: 15
    }
    const history = new Array(9);
    history[0] = {
      zone: 'china',
      profit: 10
    }
    const result = voyageProfitFactor(voyage, history);
    t.is(result, 2);
  })

rankTest('test voyageProfitFactor voyage.zone is west-indies and voyage.length is 14 and history has china and history.length is 9',
  t => {
    const voyage = {
      zone: 'west-indies',
      length: 14
    }
    const history = new Array(9);
    history[0] = {
      zone: 'china',
      profit: 10
    }
    const result = voyageProfitFactor(voyage, history);
    t.is(result, 3);
  })

rankTest('test voyageProfitFactor voyage.zone is china and voyage.length is 15 and history not has china and history.length is 9',
  t => {
    const voyage = {
      zone: 'china',
      length: 15
    }
    const history = new Array(9);
    const result = voyageProfitFactor(voyage, history);
    t.is(result, 3);
  })

rankTest('test voyageProfitFactor voyage.zone is west-indies and voyage.length is 15 and history not has china and history.length is 9',
  t => {
    const voyage = {
      zone: 'west-indies',
      length: 15
    }
    const history = new Array(9);
    const result = voyageProfitFactor(voyage, history);
    t.is(result, 2);
  })