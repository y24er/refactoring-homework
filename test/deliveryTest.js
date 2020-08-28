const deliveryTest = require('ava');
const {deliveryDate} = require('../src/delivery')

deliveryTest('test should return 2 when deliveryDate given isRush is true and deliveryState is MA', t => {
    const isRush = true;
    const anorder = {
        deliveryState: 'MA',
        placedOn:{
            plusDays:function plusDays(time){
                return time;
            }
        }
    }
    const result = deliveryDate(anorder, isRush);
    t.is(result, 2);
})