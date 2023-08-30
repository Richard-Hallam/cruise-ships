/*globals describe it expect*/
const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');
const Itinerary = require('../src/Itinerary.js');

describe('Ship', () => {
    describe('with ports and itinarary', () => {
        let mousehole
        let newlyn
        let itinarary
        let ship
        beforeEach(() => {
            mousehole = new Port('Mousehole');
            newlyn = new Port('Newylyn');
            itinerary = new Itinerary([mousehole, newlyn]);
            ship = new Ship(itinerary);
        });
        it('can be instantiated', () => {
            expect(ship).toBeInstanceOf(Object);
        });
        it('gets added to a port on instantiation', () => {
            expect(mousehole.ships).toContain(ship);
        })
    
    }) 
})

describe('Ship.setSail()', () => {
    describe('with ports and itinarary', () => {
        let mousehole
        let newlyn
        let itinarary
        let ship
        beforeEach(() => {
            mousehole = new Port('Mousehole');
            newlyn = new Port('Newylyn');
            itinerary = new Itinerary([mousehole, newlyn]);
            ship = new Ship(itinerary);
        });
    it('can set sail', () => {
        ship.setSail();

        expect(ship.currentPort).toBeFalsy();
        expect(ship.previousPort).toBe(mousehole);
        expect(mousehole.ships).not.toContain(ship);
    });

    it('Ship can\'t set sail further than its itinerary', () => {
        ship.setSail();
        ship.dock();

        expect(() => ship.setSail()).toThrowError('End of itinerary reached.');
    });
    describe('Ship.dock()', () => {

        it('Can dock at a different port', () => {
    
            ship.setSail();
            ship.dock(newlyn);
    
            expect(ship.currentPort).toBe(newlyn);
            expect(newlyn.ships).toContain(ship);
        });
    })
})});

