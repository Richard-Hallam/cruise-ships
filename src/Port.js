function Port(portName){
    this.name = portName;
    this.ships = [];

    this.addShip = function(ship){
        this.ships.push(ship);
    }

    this.removeShip = function(ship){
        this.ships = this.ships.filter(item => item !== ship);
    }
}

module.exports = Port;