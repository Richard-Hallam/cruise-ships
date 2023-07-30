/*globals describe it expect*/
const Port = require('../src/Port.js');

describe('Port', () => {

    it('Checks Port is an object', () => {
        expect(new Port()).toBeInstanceOf(Object);
    })
})