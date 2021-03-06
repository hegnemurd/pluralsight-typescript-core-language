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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NsaWVudC9jbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsQ0FBQztJQUNDLElBQUksU0FBUyxHQUFlLEVBQUUsQ0FBQztJQUUvQixTQUFTLE1BQU07UUFDYixRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsR0FBRyxTQUFTO2FBQ3ZELEdBQUcsQ0FDRixVQUFDLEVBQW1DO2dCQUFqQyxLQUFLLFdBQUEsRUFBRSxPQUFPLGFBQUEsRUFBRSxtQkFBZSxFQUFmLFdBQVcsbUJBQUcsQ0FBQyxLQUFBO1lBQU8sT0FBQSxpTUFPM0IsS0FBSyw2SUFNTCxPQUFPLHlKQVFYLFdBQVcsZ0JBQ25CLFdBQVcsS0FBSyxDQUFDLElBQUksV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLGtEQUtwRDtRQTNCNEMsQ0EyQjVDLENBQ0U7YUFDQSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDZCxDQUFDO0lBRUQsQ0FBQyxTQUFlLElBQUk7Ozs7OzRCQUNGLHFCQUFNLEtBQUssQ0FBQyxZQUFZLENBQUMsRUFBQTs7d0JBQW5DLE9BQU8sR0FBRyxTQUF5Qjt3QkFDN0IscUJBQU0sT0FBTyxDQUFDLElBQUksRUFBRSxFQUFBOzt3QkFBaEMsU0FBUyxHQUFHLFNBQW9CLENBQUM7d0JBQ2pDLGVBQWU7d0JBQ2YsMENBQTBDO3dCQUMxQyxNQUFNLEVBQUUsQ0FBQzs7Ozs7S0FDVixDQUFDLEVBQUUsQ0FBQztJQUVMLFNBQWUsd0JBQXdCLENBQUMsS0FBSzs7Ozs7O3dCQUMzQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7d0JBRWpCLEtBQUssR0FBVyxRQUFRLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQzt3QkFDeEQsT0FBTyxHQUFXLFFBQVEsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO3dCQUVoRCxxQkFBTSxLQUFLLENBQUMsZ0JBQWMsS0FBSyxpQkFBWSxPQUFTLENBQUMsRUFBQTs7d0JBQS9ELE9BQU8sR0FBRyxTQUFxRDt3QkFDeEQscUJBQU0sT0FBTyxDQUFDLElBQUksRUFBRSxFQUFBOzt3QkFBM0IsSUFBSSxHQUFHLFNBQW9CO3dCQUVqQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQzt3QkFDM0IsTUFBTSxFQUFFLENBQUM7Ozs7O0tBQ1Y7SUFFRCxRQUFRO1NBQ0wsY0FBYyxDQUFDLGNBQWMsQ0FBQztTQUM5QixnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztBQUMxRCxDQUFDLENBQUMsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUXVlc3Rpb24gfSBmcm9tIFwiLi4vQHR5cGVzL1F1ZXN0aW9uXCI7XHJcblxyXG4oKCk6IHZvaWQgPT4ge1xyXG4gIGxldCBxdWVzdGlvbnM6IFF1ZXN0aW9uW10gPSBbXTtcclxuXHJcbiAgZnVuY3Rpb24gcmVuZGVyKCk6IHZvaWQge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJRdWVzdGlvbnNcIikuaW5uZXJIVE1MID0gcXVlc3Rpb25zXHJcbiAgICAgIC5tYXAoXHJcbiAgICAgICAgKHsgdGl0bGUsIGNvbnRlbnQsIGFuc3dlckNvdW50ID0gMCB9KSA9PiBgXHJcbiAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBsaC1jb25kZW5zZWRcIj5cclxuXHJcbiAgICAgICAgICAgIDxkaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGg2IGNsYXNzPVwibXktMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICR7dGl0bGV9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvaDY+XHJcblxyXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICR7Y29udGVudH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICR7YW5zd2VyQ291bnR9IEFuc3dlciR7XHJcbiAgICAgICAgICBhbnN3ZXJDb3VudCA9PT0gMCB8fCBhbnN3ZXJDb3VudCA+IDEgPyBgc2AgOiBgYFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgYFxyXG4gICAgICApXHJcbiAgICAgIC5qb2luKFwiXCIpO1xyXG4gIH1cclxuXHJcbiAgKGFzeW5jIGZ1bmN0aW9uIGluaXQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goXCIvcXVlc3Rpb25zXCIpO1xyXG4gICAgcXVlc3Rpb25zID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XHJcbiAgICAvKiBkZWJ1Z2dlcjsgKi9cclxuICAgIC8qIFJlbW92ZSBjb21tZW50IHRvIHRyaWdnZXIgYnJlYWtwb2ludCAqL1xyXG4gICAgcmVuZGVyKCk7XHJcbiAgfSkoKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0UXVlc3Rpb25Gb3JtKGV2ZW50KTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IHRpdGxlOiBzdHJpbmcgPSBkb2N1bWVudC5mb3Jtc1tcIlF1ZXN0aW9uRm9ybVwiXVswXS52YWx1ZTtcclxuICAgIGNvbnN0IGNvbnRlbnQ6IHN0cmluZyA9IGRvY3VtZW50LmZvcm1zW1wiUXVlc3Rpb25Gb3JtXCJdWzFdLnZhbHVlO1xyXG5cclxuICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaChgL25ldz90aXRsZT0ke3RpdGxlfSZjb250ZW50PSR7Y29udGVudH1gKTtcclxuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcclxuXHJcbiAgICBxdWVzdGlvbnMgPSBqc29uLnF1ZXN0aW9ucztcclxuICAgIHJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgZG9jdW1lbnRcclxuICAgIC5nZXRFbGVtZW50QnlJZChcIlF1ZXN0aW9uRm9ybVwiKVxyXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlU3VibWl0UXVlc3Rpb25Gb3JtKTtcclxufSkoKTtcclxuIl19