const employeeTest = require('ava')
const {Employee} = require('../src/employee')
employeeTest.test('test given type is engineer', t => {
    const employee = new Employee('Jessie','engineer');
    const result = employee.toString();
    t.is(result,'Jessie (engineer)');
})

employeeTest.test('test given type is manager', t => {
    const employee = new Employee('Jessie','manager');
    const result = employee.toString();
    t.is(result,'Jessie (manager)');
})

employeeTest.test('test given type is salesman', t => {
    const employee = new Employee('Jessie','salesman');
    const result = employee.toString();
    t.is(result,'Jessie (salesman)');
})

employeeTest.test('test given type is other', t => {
    t.throws(()=>new Employee('Jessie','other'),'Employee cannot be of type other')
})