var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
(function () {
    var questions = [];
    function render() {
        document.getElementById("Questions").innerHTML = questions
            .map(function (_a) {
            var title = _a.title, content = _a.content, _b = _a.answerCount, answerCount = _b === void 0 ? 0 : _b;
            return "\n        <li class=\"list-group-item d-flex justify-content-between lh-condensed\">\n\n            <div>\n\n                <h6 class=\"my-0\">\n                    \n                    " + title + "\n                \n                </h6>\n\n                <small class=\"text-muted\">\n                    \n                    " + content + "\n                \n                </small>\n\n            </div>\n\n            <span class=\"text-muted\">\n                \n                " + answerCount + " Answer" + (answerCount === 0 || answerCount > 1 ? "s" : "") + "\n\n            </span>\n        </li>\n    ";
        })
            .join("");
    }
    (function init() {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("/questions")];
                    case 1:
                        request = _a.sent();
                        return [4 /*yield*/, request.json()];
                    case 2:
                        questions = _a.sent();
                        /* debugger; */
                        /* Remove comment to trigger breakpoint */
                        render();
                        return [2 /*return*/];
                }
            });
        });
    })();
    function handleSubmitQuestionForm(event) {
        return __awaiter(this, void 0, void 0, function () {
            var title, content, request, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        event.preventDefault();
                        title = document.forms["QuestionForm"][0].value;
                        content = document.forms["QuestionForm"][1].value;
                        return [4 /*yield*/, fetch("/new?title=" + title + "&content=" + content)];
                    case 1:
                        request = _a.sent();
                        return [4 /*yield*/, request.json()];
                    case 2:
                        json = _a.sent();
                        questions = json.questions;
                        render();
                        return [2 /*return*/];
                }
            });
        });
    }
    document
        .getElementById("QuestionForm")
        .addEventListener("submit", handleSubmitQuestionForm);
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NsaWVudC9jbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsQ0FBQztJQUNDLElBQUksU0FBUyxHQUFlLEVBQUUsQ0FBQztJQUUvQixTQUFTLE1BQU07UUFDYixRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsR0FBRyxTQUFTO2FBQ3ZELEdBQUcsQ0FDRixVQUFDLEVBQW1DO2dCQUFqQyxnQkFBSyxFQUFFLG9CQUFPLEVBQUUsbUJBQWUsRUFBZixvQ0FBZTtZQUFPLE9BQUEsaU1BTzNCLEtBQUssNklBTUwsT0FBTyx5SkFRWCxXQUFXLGdCQUNuQixXQUFXLEtBQUssQ0FBQyxJQUFJLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxrREFLcEQ7UUEzQjRDLENBMkI1QyxDQUNFO2FBQ0EsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2QsQ0FBQztJQUNELHVDQUF1QztJQUN2QyxRQUFRLENBQUM7SUFFVCxDQUFDLFNBQWUsSUFBSTs7Ozs7NEJBQ0YscUJBQU0sS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFBOzt3QkFBbkMsT0FBTyxHQUFHLFNBQXlCO3dCQUM3QixxQkFBTSxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUE7O3dCQUFoQyxTQUFTLEdBQUcsU0FBb0IsQ0FBQzt3QkFDakMsZUFBZTt3QkFDZiwwQ0FBMEM7d0JBQzFDLE1BQU0sRUFBRSxDQUFDOzs7OztLQUNWLENBQUMsRUFBRSxDQUFDO0lBRUwsU0FBZSx3QkFBd0IsQ0FBQyxLQUFLOzs7Ozs7d0JBQzNDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQzt3QkFFakIsS0FBSyxHQUFXLFFBQVEsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO3dCQUN4RCxPQUFPLEdBQVcsUUFBUSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7d0JBRWhELHFCQUFNLEtBQUssQ0FBQyxnQkFBYyxLQUFLLGlCQUFZLE9BQVMsQ0FBQyxFQUFBOzt3QkFBL0QsT0FBTyxHQUFHLFNBQXFEO3dCQUN4RCxxQkFBTSxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUE7O3dCQUEzQixJQUFJLEdBQUcsU0FBb0I7d0JBRWpDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO3dCQUMzQixNQUFNLEVBQUUsQ0FBQzs7Ozs7S0FDVjtJQUVELFFBQVE7U0FDTCxjQUFjLENBQUMsY0FBYyxDQUFDO1NBQzlCLGdCQUFnQixDQUFDLFFBQVEsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO0FBQzFELENBQUMsQ0FBQyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBRdWVzdGlvbiB9IGZyb20gXCIuLi9AdHlwZXMvUXVlc3Rpb25cIjtcclxuXHJcbigoKTogdm9pZCA9PiB7XHJcbiAgbGV0IHF1ZXN0aW9uczogUXVlc3Rpb25bXSA9IFtdO1xyXG5cclxuICBmdW5jdGlvbiByZW5kZXIoKTogdm9pZCB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlF1ZXN0aW9uc1wiKS5pbm5lckhUTUwgPSBxdWVzdGlvbnNcclxuICAgICAgLm1hcChcclxuICAgICAgICAoeyB0aXRsZSwgY29udGVudCwgYW5zd2VyQ291bnQgPSAwIH0pID0+IGBcclxuICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGxoLWNvbmRlbnNlZFwiPlxyXG5cclxuICAgICAgICAgICAgPGRpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8aDYgY2xhc3M9XCJteS0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgJHt0aXRsZX1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9oNj5cclxuXHJcbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgJHtjb250ZW50fVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgJHthbnN3ZXJDb3VudH0gQW5zd2VyJHtcclxuICAgICAgICAgIGFuc3dlckNvdW50ID09PSAwIHx8IGFuc3dlckNvdW50ID4gMSA/IGBzYCA6IGBgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICBgXHJcbiAgICAgIClcclxuICAgICAgLmpvaW4oXCJcIik7XHJcbiAgfVxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1kZWJ1Z2dlclxyXG4gIGRlYnVnZ2VyO1xyXG5cclxuICAoYXN5bmMgZnVuY3Rpb24gaW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaChcIi9xdWVzdGlvbnNcIik7XHJcbiAgICBxdWVzdGlvbnMgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcclxuICAgIC8qIGRlYnVnZ2VyOyAqL1xyXG4gICAgLyogUmVtb3ZlIGNvbW1lbnQgdG8gdHJpZ2dlciBicmVha3BvaW50ICovXHJcbiAgICByZW5kZXIoKTtcclxuICB9KSgpO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXRRdWVzdGlvbkZvcm0oZXZlbnQpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgdGl0bGU6IHN0cmluZyA9IGRvY3VtZW50LmZvcm1zW1wiUXVlc3Rpb25Gb3JtXCJdWzBdLnZhbHVlO1xyXG4gICAgY29uc3QgY29udGVudDogc3RyaW5nID0gZG9jdW1lbnQuZm9ybXNbXCJRdWVzdGlvbkZvcm1cIl1bMV0udmFsdWU7XHJcblxyXG4gICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKGAvbmV3P3RpdGxlPSR7dGl0bGV9JmNvbnRlbnQ9JHtjb250ZW50fWApO1xyXG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xyXG5cclxuICAgIHF1ZXN0aW9ucyA9IGpzb24ucXVlc3Rpb25zO1xyXG4gICAgcmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICBkb2N1bWVudFxyXG4gICAgLmdldEVsZW1lbnRCeUlkKFwiUXVlc3Rpb25Gb3JtXCIpXHJcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVTdWJtaXRRdWVzdGlvbkZvcm0pO1xyXG59KSgpO1xyXG4iXX0=