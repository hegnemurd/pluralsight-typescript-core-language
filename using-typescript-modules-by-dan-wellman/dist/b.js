import * as strings from "./a";
console.log(strings.aString);
import { aString } from "./a";
import { reverse, isOdd } from "./utils";
console.log(reverse("test"), isOdd(1));
import customStringName from "./a";
console.log(customStringName); // default
// import test = require("./a");
// console.log(test); // test
if (Math.random() >= 0.5) {
    import("./a").then((a) => console.log("The message is: ", aString));
}
// import * as config from "./config.json";
// console.log(config.userSetting1);
import { cube } from "cube";
cube(5);
cube();
import $ from "jquery";
$(document).ready(() => console.log("jQuery"));
$().debug = function () {
    console.debug($(this));
    return $(this);
};
