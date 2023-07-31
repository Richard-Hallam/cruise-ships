function Ship(shipName, port){
    this.name = shipName;
    this.passengers = 0;
    this.currentPort = port;

    this.setSail = function(){
        this.startingPort = '';
    }
};

module.exports = Ship;