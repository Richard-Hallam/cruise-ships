/*globals describe it expect*/
const Ship = require('../src/Ship.js');

describe('Ship', () => {
    
    it('checks ship is an object', () => {
    expect(new Ship()).toBeInstanceOf(Object);
    })

    it('checks ship.name is assignable at instantiation', () => {
        expect(new Ship('testShip').name).toEqual('testShip');
    })

    it('checks new ship has a starting port', () => {
        expect(new Ship('testShip').startingPort).toEqual('Mousehole');
    })
})

describe('Ship.setSail()', () => {

    it('can set sail', () => {
        const ship = new Ship('testShip', 'dover');

        ship.setSail();

        expect(ship.startingPort).toBeFalsy();
    })
})
