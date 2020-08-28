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

deliveryTest('test should return 3 when deliveryDate given isRush is true and deliveryState is NY', t => {
    const isRush = true;
    const anorder = {
        deliveryState: 'NY',
        placedOn:{
            plusDays:function plusDays(time){
                return time;
            }
        }
    }
    const result = deliveryDate(anorder, isRush);
    t.is(result, 3);
})

deliveryTest('test should return 4 when deliveryDate given isRush is true and deliveryState is OTHERS', t => {
    const isRush = true;
    const anorder = {
        deliveryState: 'OTHERS',
        placedOn:{
            plusDays:function plusDays(time){
                return time;
            }
        }
    }
    const result = deliveryDate(anorder, isRush);
    t.is(result, 4);
})

deliveryTest('test should return 4 when deliveryDate given isRush is false and deliveryState is MA', t => {
    const isRush = false;
    const anorder = {
        deliveryState: 'MA',
        placedOn:{
            plusDays:function plusDays(time){
                return time;
            }
        }
    }
    const result = deliveryDate(anorder, isRush);
    t.is(result, 4);
})

deliveryTest('test should return 5 when deliveryDate given isRush is false and deliveryState is ME', t => {
    const isRush = false;
    const anorder = {
        deliveryState: 'ME',
        placedOn:{
            plusDays:function plusDays(time){
                return time;
            }
        }
    }
    const result = deliveryDate(anorder, isRush);
    t.is(result, 5);
})

deliveryTest('test should return 6 when deliveryDate given isRush is false and deliveryState is OTHER', t => {
    const isRush = false;
    const anorder = {
        deliveryState: 'OTHER',
        placedOn:{
            plusDays:function plusDays(time){
                return time;
            }
        }
    }
    const result = deliveryDate(anorder, isRush);
    t.is(result, 6);
})