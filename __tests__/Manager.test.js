const { expect, test } = require('@jest/globals');
const Manager = require('../lib/Manager');

test ('creates a manager object', () => {
    const manager = new Manager('Jared', 2, 'chesebrojared@gmail.com', 23)

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.office).toEqual(expect.any(Number));
})

test('gets managers name', () => {
    const manager = new Manager('Jared', 2, 'chesebrojared@gmail.com', 23)

    expect(manager.getName()).toEqual(expect.any(String));
})

test('gets managers id', () => {
    const manager = new Manager('Jared', 2, 'chesebrojared@gmail.com', 23)

    expect(manager.getId()).toEqual(expect.any(Number));
})

test('gets managers email', () => {
    const manager = new Manager('Jared', 2, 'chesebrojared@gmail.com', 23)

    expect(manager.getEmail()).toEqual(expect.any(String));
})

test('gets managers office number', () => {
    const manager = new Manager('Jared', 2, 'chesebrojared@gmail.com', 23)

    expect(manager.getOffice()).toEqual(expect.any(Number));
})