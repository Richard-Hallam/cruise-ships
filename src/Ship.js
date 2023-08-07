function Ship(itinerary){
    this.itinerary = itinerary;
    this.passengers = 0;
    this.currentPort = itinerary.ports[0];
    this.previousPort = null;
    this.itinerary.ports[0].addShip(this);

    this.setSail = function(){
        const itinerary = this.itinerary;
        const currentPortIndex = itinerary.ports.indexOf(this.currentPort);
        this.currentPort.ships = this.currentPort.ships.filter(item => item !== this);

        if(currentPortIndex === (itinerary.ports.length - 1)){
            throw new Error('End of itinerary reached.')
        }
        this.previousPort = this.currentPort;
        this.currentPort = null;
    }

    this.dock = function(){
        const itinerary = this.itinerary;
        const previousPortIndex = itinerary.ports.indexOf(this.previousPort);
        
        this.currentPort = itinerary.ports[previousPortIndex + 1];
        this.currentPort.addShip(this);
    }
};

module.exports = Ship;