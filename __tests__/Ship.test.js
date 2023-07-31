/*globals describe it expect*/
const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');

describe('Ship', () => {
    
    it('checks ship is an object', () => {
        const ship = new Ship();
    
        expect(ship).toBeInstanceOf(Object);
    })

    it('checks ship.name is assignable at instantiation', () => {
        const ship = new Ship('testShip');
        
        expect(ship.name).toEqual('testShip');
    })

    it('checks new ship has a starting port', () => { 
        const port = new Port('Mousehole');
        const ship = new Ship('testShip', port);

        expect(ship.currentPort).toBe(port);
    })
})

describe('Ship.setSail()', () => {

    it('can set sail', () => {
        const port = new Port('Mousehole');
        const ship = new Ship('testShip', port);

        ship.setSail();

        expect(ship.currentPort).toBeFalsy();
        expect(ship.previousPort).toBe(port)
    })
})

describe('Ship.dock()', () => {

    it('Can dock at a different port', () => {
        const port = new Port('Mousehole');
        const port2 = new Port('Newlyn');
        const ship = new Ship('testShip', port);

        ship.setSail();
        ship.dock(port2);

        expect(ship.currentPort).toBe(port2);
    })
})