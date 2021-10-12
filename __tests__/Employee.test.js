const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Jared');

    expect(employee.name).toEqual(expect.any(String));
})