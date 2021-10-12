const { test, expect } = require('@jest/globals')
const Intern = require('../lib/Intern')

test('creates an intern object', () => {
    const intern = new Intern('Jared', 2, 'chesebrojared@gmail.com', 'University Of Oregon')

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
})

test('gets interns name', () => {
    const intern = new Intern('Jared', 2, 'chesebrojared@gmail.com', 'University Of Oregon')

    expect(intern.getName()).toEqual(expect.any(String));
})

test('gets interns id', () => {
    const intern = new Intern('Jared', 2, 'chesebrojared@gmail.com', 'University Of Oregon')

    expect(intern.getId()).toEqual(expect.any(Number));
})

test('gets interns email', () => {
    const intern = new Intern('Jared', 2, 'chesebrojared@gmail.com', 'University Of Oregon')

    expect(intern.getEmail()).toEqual(expect.any(String));
})

test('gets interns school', () => {
    const intern = new Intern('Jared', 2, 'chesebrojared@gmail.com', 'University Of Oregon')

    expect(intern.getSchool()).toEqual(expect.any(String));
})

test('gets interns role', () => {
    const intern = new Intern('Jared', 2, 'chesebrojared@gmail.com', 'University Of Oregon')

    expect(intern.getRole()).toBe('Intern')
})