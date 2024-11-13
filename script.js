import {greet} from './Modules/greet.js';
import {celsiusToFahrenheit} from './Modules/celsiusToFahrenheit.js';
import {calculateFallDistance} from './Modules/calculateFallDistance.js';
import {calculateAverage} from './Modules/calculateAverage.js';
import {concatStrings} from './Modules/concatStrings.js';


console.log(greet("Ольга"));
console.log(celsiusToFahrenheit(32));
console.log(calculateFallDistance(3));
console.log(calculateAverage(2, 5, 8));
console.log(concatStrings("Привет", "Пока"));
