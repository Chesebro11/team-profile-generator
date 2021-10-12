const { test, expect } = require('@jest/globals')
const Engineer = require('../lib/Engineer')

test('creates an engineer object', () => {
    const engineer = new Engineer('Jared', 2, 'chesebrojared@gmail.com', 'chesebro11')

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
})

test('gets enginner name', () => {
    const engineer = new Engineer('Jared', 2, 'chesebrojared@gmail.com', 'chesebro11')

    expect(engineer.getName()).toEqual(expect.any(String));
})

test('gets engineer id #', () => {
    const engineer = new Engineer('Jared', 2, 'chesebrojared@gmail.com', 'chesebro11')

    expect(engineer.getId()).toEqual(expect.any(Number));
})

test('gets engineer email', () => {
    const engineer = new Engineer('Jared', 2, 'chesebrojared@gmail.com', 'chesebro11')

    expect(engineer.getEmail()).toEqual(expect.any(String));
})

test('gets engineer github', () => {
    const engineer = new Engineer('Jared', 2, 'chesebrojared@gmail.com', 'chesebro11')

    expect(engineer.getGithub()).toEqual(expect.any(String));
})

test('gets role of engineer', () => {
    const engineer = new Engineer('Jared', 2, 'chesebrojared@gmail.com', 'chesebro11')

    expect(engineer.getRole()).toBe('Engineer')
})