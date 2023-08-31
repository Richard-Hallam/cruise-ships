/*globals describe it expect*/
const Itinerary = require('../src/Itinerary.js');
const Port = require('../src/Port.js');

describe('Itinerary', () => {
    it('can have ports', () => {
        const mousehole = jest.fn();
        const newlyn = jest.fn()

        const itinerary = new Itinerary([mousehole, newlyn]);

        expect(itinerary.ports).toEqual([mousehole, newlyn]);
    })

})