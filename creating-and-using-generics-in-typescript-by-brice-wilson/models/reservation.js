"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var conferenceRoom_1 = require("./conferenceRoom");
var Reservation = /** @class */ (function () {
    function Reservation() {
    }
    Reservation.prototype.requestResource = function (requestedResource, requester) {
        this.resource = requestedResource;
        this.organizerName = requester;
        console.log(requester + " requested a reservation " + requestedResource.name);
    };
    return Reservation;
}());
var teamMeeting = new Reservation();
teamMeeting.requestResource(conferenceRoom_1.conferenceRoomData[0], "Gary");
