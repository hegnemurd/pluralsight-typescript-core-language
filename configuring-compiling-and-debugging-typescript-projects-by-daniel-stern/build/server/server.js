"use strict";
/** @types/express must be installed in this project for VSCode to provide the correct code hints for the file below */
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
/*import { Question } from '../shared/Question';*/
var port = process.env.port || 1337;
var app = express();
var questions = [
    {
        title: "Are dividends tax deductible?",
        content: "I have recently decided to invest in....",
        answerCount: 2,
    },
    {
        title: "Is it smart to invest in commodities?",
        content: "My bank has recently offered a new....",
        answerCount: 1,
    },
];
app.use(express.static("public"));
app.get("/main.js", function (_req, res) {
    /** This patch is relative to the build directory */
    res.sendFile(path.resolve(__dirname, "..", "client", "client.js"));
});
/*
app.get("/client.js.map", (_req, res) => {

    res.sendFile(path.resolve(__dirname, "..", "client", "client.js.map"));

});

app.get("/src/client/client.ts", (_req, res) => {

    res.sendFile(path.resolve(__dirname, "..", "..", "src", "client", "client.ts"));

});
failed attempt to get source files working via serving... attempting to inline instead */
app.get("/questions", function (_req, res) {
    debugger;
    res.json(questions);
});
app.get("/new", function (req, res) {
    var question = req.query;
    questions.push(question);
    res.json({
        status: "OK",
        questions: questions,
    });
});
app.listen(port);
console.info("App listening on port " + port + "!");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlcnZlci9zZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHVIQUF1SDs7QUFFdkgsaUNBQW1DO0FBQ25DLDJCQUE2QjtBQUc3QixrREFBa0Q7QUFFbEQsSUFBTSxJQUFJLEdBQW9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQztBQUN2RCxJQUFNLEdBQUcsR0FBRyxPQUFPLEVBQUUsQ0FBQztBQUV0QixJQUFNLFNBQVMsR0FBZTtJQUM1QjtRQUNFLEtBQUssRUFBRSwrQkFBK0I7UUFDdEMsT0FBTyxFQUFFLDBDQUEwQztRQUNuRCxXQUFXLEVBQUUsQ0FBQztLQUNmO0lBQ0Q7UUFDRSxLQUFLLEVBQUUsdUNBQXVDO1FBQzlDLE9BQU8sRUFBRSx3Q0FBd0M7UUFDakQsV0FBVyxFQUFFLENBQUM7S0FDZjtDQUNGLENBQUM7QUFFRixHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztBQUVsQyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxVQUFDLElBQUksRUFBRSxHQUFHO0lBQzVCLG9EQUFvRDtJQUNwRCxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQztBQUNyRSxDQUFDLENBQUMsQ0FBQztBQUVIOzs7Ozs7Ozs7Ozs7eUZBWXlGO0FBRXpGLEdBQUcsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLFVBQUMsSUFBSSxFQUFFLEdBQUc7SUFDOUIsUUFBUSxDQUFDO0lBQ1QsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUN0QixDQUFDLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQUc7SUFDdkIsSUFBTSxRQUFRLEdBQWEsR0FBRyxDQUFDLEtBQUssQ0FBQztJQUNyQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRXpCLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDUCxNQUFNLEVBQUUsSUFBSTtRQUNaLFNBQVMsV0FBQTtLQUNWLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNqQixPQUFPLENBQUMsSUFBSSxDQUFDLDJCQUF5QixJQUFJLE1BQUcsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEB0eXBlcy9leHByZXNzIG11c3QgYmUgaW5zdGFsbGVkIGluIHRoaXMgcHJvamVjdCBmb3IgVlNDb2RlIHRvIHByb3ZpZGUgdGhlIGNvcnJlY3QgY29kZSBoaW50cyBmb3IgdGhlIGZpbGUgYmVsb3cgKi9cclxuXHJcbmltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcclxuaW1wb3J0ICogYXMgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgeyBRdWVzdGlvbiB9IGZyb20gXCIuLi9AdHlwZXMvUXVlc3Rpb25cIjtcclxuXHJcbi8qaW1wb3J0IHsgUXVlc3Rpb24gfSBmcm9tICcuLi9zaGFyZWQvUXVlc3Rpb24nOyovXHJcblxyXG5jb25zdCBwb3J0OiBzdHJpbmcgfCBudW1iZXIgPSBwcm9jZXNzLmVudi5wb3J0IHx8IDEzMzc7XHJcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcclxuXHJcbmNvbnN0IHF1ZXN0aW9uczogUXVlc3Rpb25bXSA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogXCJBcmUgZGl2aWRlbmRzIHRheCBkZWR1Y3RpYmxlP1wiLFxyXG4gICAgY29udGVudDogXCJJIGhhdmUgcmVjZW50bHkgZGVjaWRlZCB0byBpbnZlc3QgaW4uLi4uXCIsXHJcbiAgICBhbnN3ZXJDb3VudDogMixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIklzIGl0IHNtYXJ0IHRvIGludmVzdCBpbiBjb21tb2RpdGllcz9cIixcclxuICAgIGNvbnRlbnQ6IFwiTXkgYmFuayBoYXMgcmVjZW50bHkgb2ZmZXJlZCBhIG5ldy4uLi5cIixcclxuICAgIGFuc3dlckNvdW50OiAxLFxyXG4gIH0sXHJcbl07XHJcblxyXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKFwicHVibGljXCIpKTtcclxuXHJcbmFwcC5nZXQoXCIvbWFpbi5qc1wiLCAoX3JlcSwgcmVzKSA9PiB7XHJcbiAgLyoqIFRoaXMgcGF0Y2ggaXMgcmVsYXRpdmUgdG8gdGhlIGJ1aWxkIGRpcmVjdG9yeSAqL1xyXG4gIHJlcy5zZW5kRmlsZShwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4uXCIsIFwiY2xpZW50XCIsIFwiY2xpZW50LmpzXCIpKTtcclxufSk7XHJcblxyXG4vKlxyXG5hcHAuZ2V0KFwiL2NsaWVudC5qcy5tYXBcIiwgKF9yZXEsIHJlcykgPT4ge1xyXG5cclxuICAgIHJlcy5zZW5kRmlsZShwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4uXCIsIFwiY2xpZW50XCIsIFwiY2xpZW50LmpzLm1hcFwiKSk7XHJcblxyXG59KTtcclxuXHJcbmFwcC5nZXQoXCIvc3JjL2NsaWVudC9jbGllbnQudHNcIiwgKF9yZXEsIHJlcykgPT4ge1xyXG5cclxuICAgIHJlcy5zZW5kRmlsZShwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4uXCIsIFwiLi5cIiwgXCJzcmNcIiwgXCJjbGllbnRcIiwgXCJjbGllbnQudHNcIikpO1xyXG5cclxufSk7XHJcbmZhaWxlZCBhdHRlbXB0IHRvIGdldCBzb3VyY2UgZmlsZXMgd29ya2luZyB2aWEgc2VydmluZy4uLiBhdHRlbXB0aW5nIHRvIGlubGluZSBpbnN0ZWFkICovXHJcblxyXG5hcHAuZ2V0KFwiL3F1ZXN0aW9uc1wiLCAoX3JlcSwgcmVzKSA9PiB7XHJcbiAgZGVidWdnZXI7XHJcbiAgcmVzLmpzb24ocXVlc3Rpb25zKTtcclxufSk7XHJcblxyXG5hcHAuZ2V0KFwiL25ld1wiLCAocmVxLCByZXMpID0+IHtcclxuICBjb25zdCBxdWVzdGlvbjogUXVlc3Rpb24gPSByZXEucXVlcnk7XHJcbiAgcXVlc3Rpb25zLnB1c2gocXVlc3Rpb24pO1xyXG5cclxuICByZXMuanNvbih7XHJcbiAgICBzdGF0dXM6IFwiT0tcIixcclxuICAgIHF1ZXN0aW9ucyxcclxuICB9KTtcclxufSk7XHJcblxyXG5hcHAubGlzdGVuKHBvcnQpO1xyXG5jb25zb2xlLmluZm8oYEFwcCBsaXN0ZW5pbmcgb24gcG9ydCAke3BvcnR9IWApO1xyXG4iXX0=