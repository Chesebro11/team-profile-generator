const { test, expect } = require('@jest/globals');
const { extractExpectedAssertionsErrors } = require('expect');
const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Jared', 2, 'chesbrojared@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})

test('gets employees name', () => {
    const employee = new Employee('Jared', 2, 'chesebrojared@gmail.com')

    expect(employee.getName()).toEqual(expect.any(String));
})

test('gets employees id', () => {
    const employee = new Employee('Jared', 2, 'chesebrojared@gmail.com')

    expect(employee.getId()).toEqual(expect.any(Number));
})

test('gets employee email', () => {
    const employee = new Employee('Jared', 2, 'chesebrojared@gmail.com')

    expect(employee.getEmail()).toEqual(expect.any(String));
})

test('gets employee role', () => {
    const employee = new Employee('Jared', 2, 'chesebrojared@gmail.com')

    expect(employee.getRole()).toBe('Employee')
})