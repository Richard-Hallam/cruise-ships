/*globals describe it expect*/
const Itinerary = require('../src/Itinerary.js');
const Port = require('../src/Port.js');

describe('Itinerary', () => {
    it('can have ports', () => {
        const mousehole = new Port('Mousehole');
        const newlyn = new Port('Newlyn');

        const itinerary = new Itinerary([mousehole, newlyn]);

        expect(itinerary.ports).toEqual([mousehole, newlyn]);
    })

})