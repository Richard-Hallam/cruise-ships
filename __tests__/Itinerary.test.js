/*globals describe it expect*/
const Itinerary = require('../src/Itinerary.js');

describe('Itinerary', () => {
    it('checks Itinerary is an object', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    })

    it('checks Itinerary takes arguments',() => {
        itinerary = new Itinerary('tp1', 'tp2', 'tp3');
        
        expect(itinerary.port1).toEqual('tp1');
    })
})