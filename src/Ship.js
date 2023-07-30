function Ship(shipName){
    this.name = shipName;
    this.passengers = 0;
    this.startingPort = 'Mousehole';

    this.setSail = function(){
        this.startingPort = '';
    }
};

module.exports = Ship;