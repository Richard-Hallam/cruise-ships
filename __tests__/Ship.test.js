/*globals describe it expect*/
const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');
const Itinerary = require('../src/Itinerary.js');

describe('Ship', () => {
    
    it('can be instantiated', () => {
        const port = new Port('Mousehole');
        const itinerary = new Itinerary([port])
        const ship = new Ship(itinerary);
    
        expect(ship).toBeInstanceOf(Object);
    });

})

describe('Ship.setSail()', () => {

    it('can set sail', () => {
        const port = new Port('Mousehole');
        const newlyn = new Port('newlyn');
        const itinerary = new Itinerary([port, newlyn]);
        const ship = new Ship(itinerary);

        ship.setSail();

        expect(ship.currentPort).toBeFalsy();
        expect(ship.previousPort).toBe(port)
    });

    it('Ship can\'t set sail further than its itinerary', () => {
        const mousehole = new Port('Mousehole');
        const newlyn = new Port('Newlyn');
        const itinerary = new Itinerary([mousehole, newlyn]);
        const ship = new Ship(itinerary);

        ship.setSail();
        ship.dock();

        expect(() => ship.setSail()).toThrowError('End of itinerary reached.');
    });
})

describe('Ship.dock()', () => {

    it('Can dock at a different port', () => {
        const port = new Port('Mousehole');
        const port2 = new Port('Newlyn');
        const itinerary = new Itinerary([port, port2])
        const ship = new Ship(itinerary);

        ship.setSail();
        ship.dock(port2);

        expect(ship.currentPort).toBe(port2);
    });
})