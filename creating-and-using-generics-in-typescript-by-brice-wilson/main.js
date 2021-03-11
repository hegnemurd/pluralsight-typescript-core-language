"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var conferenceRoom_1 = require("./models/conferenceRoom");
function getBigRooms(rooms, minSize) {
    var bigRooms = [];
    rooms.forEach(function (r) {
        if (r.capacity > minSize) {
            bigRooms.push(r);
        }
    });
    return bigRooms;
}
var getLargeRooms;
getLargeRooms = getBigRooms;
var largeRooms = getLargeRooms(conferenceRoom_1.conferenceRoomData, 30);
console.log(largeRooms);
// let junkDrawer: any[] = ["cool string", 42, true];
// let companies: Array<string> = ["Microsoft", "Google", "Amazon"];
// let primeNums: Array<number> = [7, 11, 13];
// let lastValue = primeNums.pop();
function shortenArray(data, amountToShorten) {
    return data.splice(amountToShorten, data.length);
}
var shrinkArray;
shrinkArray = shortenArray;
// let stringArray: string[] = ["Visual Basic", "C++", "TypeScript", "JavaScript"];
// let fewerLanguages = shortenArray(stringArray, 2);
// console.log(fewerLanguages);
// shortenArray<string>(stringArray, 2);
