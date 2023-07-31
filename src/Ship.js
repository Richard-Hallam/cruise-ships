function Ship(itinerary){
    this.itinerary = itinerary;
    this.passengers = 0;
    this.currentPort = itinerary.ports[0];
    //this.startingPort = itinerary.ports[0];
    this.previousPort = null;

    this.setSail = function(){
        const itinerary = this.itinerary;
        const currentPortIndex = itinerary.ports.indexOf(this.currentPort);

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
    }
};

module.exports = Ship;