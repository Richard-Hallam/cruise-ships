/*globals describe it expect*/
const Ship = require('../src/Ship.js');

describe('Ship', () => {
    describe('with ports and itinarary', () => {
        let mousehole
        let newlyn
        let itinarary
        let ship

        beforeEach(() => {
            //mousehole = new Port('Mousehole');
            //newlyn = new Port('Newylyn');
            mousehole = {
                addShip: jest.fn(),
                removeShip: jest.fn(),
                name: 'mousehole',
                ships: [],
              };
            newlyn = {
                addship: jest.fn(),
                removeship: jest.fn(),
                name: 'newlyn',
                ships: [],
              };
            itinerary = {
                ports: [mousehole, newlyn],
                startingPort: mousehole,
            };
            ship = new Ship(itinerary);

        });
        it('can be instantiated', () => {
            expect(ship).toBeInstanceOf(Object);
        });
        
    
    }) 
})

describe('Ship.setSail()', () => {
    describe('with ports and itinarary', () => {
        let mousehole
        let newlyn
        let itinarary 
        let ship
        beforeEach(() => {
            mousehole = {
                addShip: jest.fn(),
                removeShip: jest.fn(),
                name: 'mousehole',
                ships: [],
              };
            newlyn = {
                addship: jest.fn(),
                removeship: jest.fn(),
                name: 'newlyn',
                ships: [],
              };
            itinerary = {
                ports: [mousehole, newlyn],
                startingPort: mousehole,
            };
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

    let mousehole
        let newlyn
        let itinarary 
        let ship
        beforeEach(() => {
            mousehole = {
                addShip: jest.fn(),
                removeShip: jest.fn(),
                name: 'mousehole',
                ships: [],
              };
            newlyn = {
                addship: jest.fn(),
                removeship: jest.fn(),
                name: 'newlyn',
                ships: [],
              };
            itinerary = {
                ports: [mousehole, newlyn],
                startingPort: mousehole,
            };
            ship = new Ship(itinerary);
        });

    it('Can dock at a different port', () => {
    
        ship.setSail();
        ship.dock(newlyn);
    
        expect(ship.currentPort).toBe(newlyn);
        expect(mousehole.removeShip).toHaveBeenCalledWith(ship);
        });
    })
})});

