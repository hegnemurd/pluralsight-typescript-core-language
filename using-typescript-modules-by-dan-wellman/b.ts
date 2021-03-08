// import { aString as theString, bString } from "./a";
import * as strings from "./a";
console.log(strings.aString);

import { reverse, isOdd } from "./utils";
console.log(reverse("test"), isOdd(1));

import customStringName from "./a";
console.log(customStringName); // default

// import test = require("./a");
// console.log(test); // test