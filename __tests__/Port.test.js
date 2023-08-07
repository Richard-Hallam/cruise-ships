/*globals describe it expect*/
const Itinerary = require('../src/Itinerary.js');
const Port = require('../src/Port.js');

describe('Port', () => {

    it('Checks Port is an object', () => {
        expect(new Port()).toBeInstanceOf(Object);
    })

    it('Checks Port can have ships', () => {
        const port = new Port('Mousehole');
        const itinerary = new Itinerary(port);
        const ship = itinerary;

        port.addShip(ship);
        expect(port.ships).toContain(ship)
    })

    it('can remove a ship', () => {
        const port = new Port('Mousehole');
        const scilionian = {};
        const kipper = {};

        port.addShip(scilionian);
        port.addShip(kipper);
        port.removeShip(kipper);

        expect(port.ships).toEqual([scilionian]);
    })
})

