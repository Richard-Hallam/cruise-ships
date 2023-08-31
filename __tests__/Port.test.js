/*globals describe it expect*/
const Itinerary = require('../src/Itinerary.js');
const Port = require('../src/Port.js');

describe('Port', () => {
    describe("with ports and itinarary", () => {
        let port;
        let itinarary;
        let ship;
        let scilionian;
        let kipper;
        beforeEach(() =>{
            port = new Port('Mousehole');
            itninerary = jest.fn();
            ship = jest.fn();
            scilionian = jest.fn();
            kipper = jest.fn();
        })
        it('Checks Port is an object', () => {
            expect(new Port()).toBeInstanceOf(Object);
        })

        it('Checks Port can have ships', () => {
            port.addShip(ship);
            expect(port.ships).toContain(ship)
        })

        it('can remove a ship', () => {

            port.addShip(scilionian);
            port.addShip(kipper);
            port.removeShip(kipper);

            expect(port.ships).toEqual([scilionian]);
        })
});
});

