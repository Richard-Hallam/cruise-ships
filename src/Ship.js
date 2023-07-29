function Ship(shipName){
    this.name = shipName;
    this.passengers = 0;
    this.startingPort = 'Mousehole';
};

module.exports = Ship;