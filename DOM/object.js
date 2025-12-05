const tataCar = {
    // properties
    brandName : "TATA",
    modelName : "Punch",
    yearOfRelease : 2015,
    colors : ["Orcus White", "Daytona Grey", "Tropical Mist", "Calypso Red"],
    fuelVariant : "Petrol",
    mode : "Manual",
    speed : 0,          // new property
    isStarted : false,  // new property
    
    // methods
    getCarInfo() {
        return `${this.brandName} ${this.modelName} - Released in ${this.yearOfRelease}`;
    },

    listAvailableColors() {
        return `Available colors : ${this.colors.join(", ")}`;
    },

    updateMode(newMode) {
        this.mode = newMode;
        return `Mode updated to ${this.mode}`;
    },

    addColor(newColor) {
        this.colors.push(newColor);
        return `Color added: ${newColor}`;
    },

    start() {
        if (this.isStarted) {
            return "Car is already started.";
        }
        this.isStarted = true;
        return "Car started successfully 🚗💨";
    },

    stop() {
        if (!this.isStarted) {
            return "Car is already stopped.";
        }
        this.isStarted = false;
        this.speed = 0;
        return "Car stopped.";
    },

    accelerate(amount) {
        if (!this.isStarted) {
            return "Start the car before accelerating!";
        }
        this.speed += amount;
        return `Accelerating... Current speed: ${this.speed} km/h`;
    }
};



console.log(tataCar);

console.log(tataCar.brandName);
const carInformation = tataCar.getCarInfo();
console.log(carInformation);
