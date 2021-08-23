const cars = [
    { brand: 'Audi', color: 'black' },
    { brand: 'Audi', color: 'white' },
    { brand: 'Ferarri', color: 'red' },
    { brand: 'Ford', color: 'white' },
    { brand: 'Mercedes', color: 'white' },
    { brand: 'Mercedes', color: 'red' }
];

// function filterCars(carsArr, filter){
//     let output = {};
//     carsArr.forEach(car => {
//         if(!output.hasOwnProperty(car[filter])){
//             output[car[filter]] = [car]
//         }
//         else {
//             output[car[filter]].push(car)
//         }
//     })
//     return output;
// }
// console.log(filterCars(cars, 'brand'));
function groupBy(cars, filter){
    let a=[],b={},c, d;
    for(let i = 0; i < cars.length; i++){
        if(cars[i][filter] in b){
            b[cars[i][filter]].push(cars[i])
        }
        else {
             b[cars[i][filter]] = [cars[i]]
        }
    }
    console.log(b)
}
groupBy(cars, "brand")