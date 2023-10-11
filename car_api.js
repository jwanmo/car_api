const cars = require("./cars.json");

// Endpoint for retrieving a list of cars
exports.getAllCars = (req, res) => {
    var data = "select * cars from cars_table";  // her er eksempl hvis database finnes.
    if (cars.length == 0 )
        res.status(404).json({"cars": "finner ikke", "count":0})
    if (data != null && cars.length > 0 )
        res.status(200).json(cars);
    else
        res.status(200).json({"data": "finnes ikke"})
}; 
exports.getCarById = (req, res) => {
   
    //const {car_id} = req.params;  // 4  ex
    // 1. { id: 1, brand: 'Toyota', model: 'Camry' },  no
    // 2. { id: 2, brand: 'Honda', model: 'Civic' }, yes
    // 3. { id: 3, brand: 'Ford', model: 'Mustang' },
    
    const carId = parseInt(req.params.car_id); // Use parseInt(req.params.car_id) to get the car_id from the URL
    const car = cars.find((car) => car.id === carId);

    //const car = cars.find((car) => car.id === car_id);
    if (car) {
        res.status(200).json(car); 
    } else {
        res.status(404).json({  data: "car not found!"});
    }
};




