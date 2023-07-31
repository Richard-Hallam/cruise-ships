function Ship(shipName, port){
    this.name = shipName;
    this.passengers = 0;
    this.currentPort = port;
    this.startingPort = port;

    this.setSail = function(){
        this.currentPort = '';
    }

    this.dock = function(port){
        this.currentPort = port;
    }
};

module.exports = Ship;