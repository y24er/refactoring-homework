const rankTest = require('ava');
const { voyageProfitFactor, voyageRisk, captainHistoryRisk } = require('../src/rank');
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

rankTest('test voyageRisk voyage length is 4 and zone is china', t => {
  const voyage = {
    zone: 'china',
    length: 4
  }
  const result = voyageRisk(voyage);
  t.is(result, 5);
})

rankTest('test voyageRisk voyage length is 5 and zone is china', t => {
  const voyage = {
    zone: 'china',
    length: 5
  }
  const result = voyageRisk(voyage);
  t.is(result, 7);
})

rankTest('test voyageRisk voyage length is 8 and zone is china', t => {
  const voyage = {
    zone: 'china',
    length: 8
  }
  const result = voyageRisk(voyage);
  t.is(result, 7);
})

rankTest('test voyageRisk voyage length is 9 and zone is china', t => {
  const voyage = {
    zone: 'china',
    length: 9
  }
  const result = voyageRisk(voyage);
  t.is(result, 8);
})

rankTest('test voyageRisk voyage length is 9 and zone is east-indies', t => {
  const voyage = {
    zone: 'east-indies',
    length: 9
  }
  const result = voyageRisk(voyage);
  t.is(result, 8);
})

rankTest('test voyageRisk voyage length is 9 and zone is west-indies', t => {
  const voyage = {
    zone: 'west-indies',
    length: 9
  }
  const result = voyageRisk(voyage);
  t.is(result, 4);
})

rankTest('test captainHistoryRisk voyage and zone is china and history length is 5 and profit >0 and has china', t => {
  const voyage = {
    zone: 'china',
    length: 5
  }
  const history = new Array(5)
  history[0] =
  {
    zone: 'china',
    profit: 10
  }
  const result = captainHistoryRisk(voyage, history);
  t.is(result, 0);
})

rankTest('test captainHistoryRisk voyage and zone is china and history length is 1 and profit >0 and has china', t => {
  const voyage = {
    zone: 'china',
    length: 5
  }
  const history = [
    {
      zone: 'china',
      profit: 10
    }
  ]
  const result = captainHistoryRisk(voyage, history);
  t.is(result, 3);
})

rankTest('test captainHistoryRisk voyage and zone is china and history length is 4 and profit <0 and has china', t => {
  const voyage = {
    zone: 'china',
    length: 5
  }
  const history = [{
    zone: 'china',
    profit: -1
  }
  ]
  const result = captainHistoryRisk(voyage, history);
  t.is(result, 4);
})