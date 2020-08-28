const printTest = require('ava');
const {printOwing} = require('../src/print');

printTest.test('test1 printOwing method',t=>{
    const invoice={
        customer:'Jessie',
        borderSpacing:[
            {
                amount:10
            }
        ]
    }
    t.snapshot(`***********************\n`+
    `**** Customer Owes ****\n`+
    `***********************\n`+
    `name: Jessie\n`+
    `amount: 9/27/2020\n`,printOwing(invoice))
})