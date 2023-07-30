/*globals describe it expect*/
const Itinerary = require('..src/Itinerary.js');

describe('Itinerary', () => {
    it('checks Itinerary is an object', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    })
})