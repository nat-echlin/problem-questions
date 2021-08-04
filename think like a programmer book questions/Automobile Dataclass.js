class Automobile {
    // let _manufacturer, modelName, modelYear;
    constructor (manufacturer, modelName, modelYear) {
        this.manufacturer = manufacturer
        this.modelName = modelName
        this.modelYear = modelYear
    }

    age() {
        return 2021 - this.modelYear
    }
    formattedName() {
        return `${this.modelYear} ${this.manufacturer} ${this.modelName}`        
    }
}

const myCar = new Automobile("Renault", "Grand Scenic", "2017")
console.log(
    myCar.formattedName()
)