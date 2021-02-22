/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_checking_account__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/checking-account */ "./src/scripts/checking-account.ts");
/* harmony import */ var _scripts_savings_account__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/savings-account */ "./src/scripts/savings-account.ts");
/* harmony import */ var _scripts_account_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/account-list */ "./src/scripts/account-list.ts");
/* harmony import */ var _scripts_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/renderer */ "./src/scripts/renderer.ts");
/* harmony import */ var _scripts_enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/enums */ "./src/scripts/enums.ts");
/* harmony import */ var _scripts_atm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/atm */ "./src/scripts/atm.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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






var Main = /** @class */ (function () {
    function Main(renderer) {
        this.renderer = renderer;
    }
    Main.prototype.loadAccounts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, html;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("/data.json")];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        this.checkingAccount = new _scripts_checking_account__WEBPACK_IMPORTED_MODULE_0__["CheckingAccount"](__assign({}, data.checkingAccount));
                        this.savingsAccount = new _scripts_savings_account__WEBPACK_IMPORTED_MODULE_1__["SavingsAccount"](__assign({}, data.savingsAccount));
                        this.atm = new _scripts_atm__WEBPACK_IMPORTED_MODULE_5__["ATM"](this.checkingAccount);
                        html = this.renderAccounts();
                        this.renderer.render("\n            <h2>Welcome to Acme Bank!</h2><br />\n            <image src=\"src/images/acmebank.jpg\" height=\"150\">\n            <br /><br />\n            <h5>Your Accounts:</h5><br />\n            " + html + "\n        ");
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.changeView = function (view) {
        switch (view) {
            case "checking":
                this.currentAccount = this.checkingAccount;
                break;
            case "savings":
                this.currentAccount = this.savingsAccount;
                break;
            case "atm":
                this.currentAccount = this.checkingAccount;
                this.renderAtm();
                return;
        }
        this.renderAccount(this.currentAccount);
    };
    Main.prototype.renderAtm = function () {
        var html = "\n                <h3>ATM</h3>\n                <image src=\"src/images/atm.jpg\" height=\"150\">\n                <br /><br />\n                Current Checking Account Balance: $" + this.checkingAccount.balance + "\n                <br /><br />\n                $<input type=\"text\" id=\"depositWithdrawalAmount\">&nbsp;&nbsp;\n                <button onclick=\"main.depositWithDrawal(true, true)\">Deposit</button>&nbsp;\n                <button onclick=\"main.depositWithDrawal(false, true)\">Withdrawal</button>&nbsp;\n            ";
        this.renderer.render(html);
    };
    Main.prototype.renderAccounts = function () {
        var acctsHtml = "";
        var accList = new _scripts_account_list__WEBPACK_IMPORTED_MODULE_2__["AccountList"]();
        accList.add(this.checkingAccount);
        accList.add(this.savingsAccount);
        accList.getAccounts().forEach(function (acct, index) {
            acctsHtml += acct.title + "<br />";
        });
        return acctsHtml;
    };
    Main.prototype.renderAccount = function (account) {
        var accountType = _scripts_enums__WEBPACK_IMPORTED_MODULE_4__["AccountType"][account.accountType];
        var html = "\n                <h3>" + accountType + " Account</h3>\n                <image src=\"src/images/" + accountType.toLowerCase() + ".jpg\" height=\"150\">\n                <br /><br />\n                <span class=\"label\">Owner:</span> " + account.title + "\n                <br />\n                <span class=\"label\">Balance:</span> $" + account.balance.toFixed(2) + "\n                <br /><br />\n                $<input type=\"text\" id=\"depositWithdrawalAmount\">&nbsp;&nbsp;\n                <button onclick=\"main.depositWithDrawal(true)\">Deposit</button>&nbsp;\n                <button onclick=\"main.depositWithDrawal(false)\">Withdrawal</button>&nbsp;\n            ";
        this.renderer.render(html);
    };
    Main.prototype.depositWithDrawal = function (deposit, atm) {
        var amountInput = document.querySelector("#depositWithdrawalAmount");
        var amount = +amountInput.value;
        var error;
        try {
            if (deposit) {
                if (atm) {
                    this.atm.deposit(amount);
                }
                else {
                    this.currentAccount.deposit(amount);
                }
            }
            else {
                if (atm) {
                    this.atm.withdrawal(amount);
                }
                else {
                    this.currentAccount.withdrawal(amount);
                }
            }
        }
        catch (e) {
            error = e;
        }
        atm ? this.renderAtm() : this.renderAccount(this.currentAccount);
        if (error) {
            this.renderer.renderError(error.message);
        }
    };
    return Main;
}());
// Create main object and add handlers for it
var renderer = new _scripts_renderer__WEBPACK_IMPORTED_MODULE_3__["Renderer"](document.querySelector("#viewTemplate"));
var main = new Main(renderer);
main.loadAccounts();
// Quick and easy way to expose a global API that can hook to the Main object
// so that we can get to it from click and events and others.
// Yes, there are other ways but this gets the job done for this demo.
window.main = main;


/***/ }),

/***/ "./src/scripts/account-list.ts":
/*!*************************************!*\
  !*** ./src/scripts/account-list.ts ***!
  \*************************************/
/*! exports provided: AccountList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountList", function() { return AccountList; });
var AccountList = /** @class */ (function () {
    function AccountList() {
        this._accountList = [];
    }
    AccountList.prototype.add = function (account) {
        this._accountList.push(account);
    };
    AccountList.prototype.getAccounts = function () {
        return this._accountList;
    };
    return AccountList;
}());



/***/ }),

/***/ "./src/scripts/atm.ts":
/*!****************************!*\
  !*** ./src/scripts/atm.ts ***!
  \****************************/
/*! exports provided: ATM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATM", function() { return ATM; });
var ATM = /** @class */ (function () {
    function ATM(account) {
        this.account = account;
    }
    ATM.prototype.deposit = function (amount) {
        this.account.deposit(amount);
    };
    ATM.prototype.withdrawal = function (amount) {
        this.account.withdrawal(amount);
    };
    return ATM;
}());



/***/ }),

/***/ "./src/scripts/bank-account.ts":
/*!*************************************!*\
  !*** ./src/scripts/bank-account.ts ***!
  \*************************************/
/*! exports provided: BankAccount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankAccount", function() { return BankAccount; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/scripts/constants.ts");

var BankAccount = /** @class */ (function () {
    function BankAccount(accountSettings) {
        this._balance = 0;
        this.id = accountSettings.id;
        this.title = accountSettings.title;
        this.balance = accountSettings.balance;
    }
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    BankAccount.prototype.withdrawal = function (amount) {
        this.balance -= amount;
    };
    BankAccount.prototype.getAccountInfo = function () {
        return {
            routingNumber: _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].ROUTING_NUMBER,
            bankNumber: _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].BANK_NUMBER,
        };
    };
    Object.defineProperty(BankAccount.prototype, "balance", {
        get: function () {
            return this._balance;
        },
        set: function (val) {
            if (val >= 0) {
                this._balance = val;
            }
            else {
                throw Error("Balance cannot be negative!");
            }
        },
        enumerable: true,
        configurable: true
    });
    return BankAccount;
}());



/***/ }),

/***/ "./src/scripts/checking-account.ts":
/*!*****************************************!*\
  !*** ./src/scripts/checking-account.ts ***!
  \*****************************************/
/*! exports provided: CheckingAccount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckingAccount", function() { return CheckingAccount; });
/* harmony import */ var _bank_account__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bank-account */ "./src/scripts/bank-account.ts");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enums */ "./src/scripts/enums.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var CheckingAccount = /** @class */ (function (_super) {
    __extends(CheckingAccount, _super);
    function CheckingAccount() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.accountType = _enums__WEBPACK_IMPORTED_MODULE_1__["AccountType"].Checking;
        return _this;
    }
    return CheckingAccount;
}(_bank_account__WEBPACK_IMPORTED_MODULE_0__["BankAccount"]));



/***/ }),

/***/ "./src/scripts/constants.ts":
/*!**********************************!*\
  !*** ./src/scripts/constants.ts ***!
  \**********************************/
/*! exports provided: Constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Object.defineProperty(Constants, "ROUTING_NUMBER", {
        get: function () {
            return "1231A4433Y2";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "BANK_NUMBER", {
        get: function () {
            return 100008374;
        },
        enumerable: true,
        configurable: true
    });
    return Constants;
}());



/***/ }),

/***/ "./src/scripts/enums.ts":
/*!******************************!*\
  !*** ./src/scripts/enums.ts ***!
  \******************************/
/*! exports provided: AccountType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountType", function() { return AccountType; });
var AccountType;
(function (AccountType) {
    AccountType[AccountType["Checking"] = 0] = "Checking";
    AccountType[AccountType["Savings"] = 1] = "Savings";
})(AccountType || (AccountType = {}));


/***/ }),

/***/ "./src/scripts/renderer.ts":
/*!*********************************!*\
  !*** ./src/scripts/renderer.ts ***!
  \*********************************/
/*! exports provided: Renderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Renderer", function() { return Renderer; });
var Renderer = /** @class */ (function () {
    function Renderer(viewTemplate) {
        this.viewTemplate = viewTemplate;
        this.viewTemplate.innerHTML = "\n            <h2>Welcome to Acme Bank!</h2>\n            <image src=\"src/images/acmebank.jpg\" height=\"150\">\n            <br /><br />\n            <h5>Your Accounts:</h5><br />";
    }
    Renderer.prototype.render = function (html) {
        this.viewTemplate.innerHTML = html;
    };
    Renderer.prototype.renderError = function (message) {
        this.viewTemplate.innerHTML += "<br /><br /><div class=\"alert alert-danger\">" + message + "</div>";
    };
    return Renderer;
}());



/***/ }),

/***/ "./src/scripts/savings-account.ts":
/*!****************************************!*\
  !*** ./src/scripts/savings-account.ts ***!
  \****************************************/
/*! exports provided: SavingsAccount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavingsAccount", function() { return SavingsAccount; });
/* harmony import */ var _bank_account__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bank-account */ "./src/scripts/bank-account.ts");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enums */ "./src/scripts/enums.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount(accountSettings) {
        var _this = _super.call(this, accountSettings) || this;
        _this.accountType = _enums__WEBPACK_IMPORTED_MODULE_1__["AccountType"].Savings;
        _this._interestRate = accountSettings.interestRate;
        // Simulate interest over time
        setInterval(function () {
            _this.addInterest();
        }, 60000);
        return _this;
    }
    SavingsAccount.prototype.deposit = function (amount) {
        var newAmount = amount + amount * (this._interestRate / 100);
        this.balance += newAmount;
    };
    SavingsAccount.prototype.addInterest = function () {
        this.balance = this.balance + this.balance * (this._interestRate / 100);
    };
    return SavingsAccount;
}(_bank_account__WEBPACK_IMPORTED_MODULE_0__["BankAccount"]));



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvYWNjb3VudC1saXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2F0bS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9iYW5rLWFjY291bnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvY2hlY2tpbmctYWNjb3VudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZW51bXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvcmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc2F2aW5ncy1hY2NvdW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7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Q0gscUJBQUM7QUFBRCxDQUFDLENBdEJtQyx5REFBVyxHQXNCOUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi50c1wiKTtcbiIsImltcG9ydCB7IENoZWNraW5nQWNjb3VudCB9IGZyb20gXCIuL3NjcmlwdHMvY2hlY2tpbmctYWNjb3VudFwiO1xuaW1wb3J0IHsgU2F2aW5nc0FjY291bnQgfSBmcm9tIFwiLi9zY3JpcHRzL3NhdmluZ3MtYWNjb3VudFwiO1xuaW1wb3J0IHsgQWNjb3VudExpc3QgfSBmcm9tIFwiLi9zY3JpcHRzL2FjY291bnQtbGlzdFwiO1xuaW1wb3J0IHsgQmFua0FjY291bnQgfSBmcm9tIFwiLi9zY3JpcHRzL2JhbmstYWNjb3VudFwiO1xuaW1wb3J0IHsgUmVuZGVyZXIgfSBmcm9tIFwiLi9zY3JpcHRzL3JlbmRlcmVyXCI7XG5pbXBvcnQgeyBBY2NvdW50VHlwZSB9IGZyb20gXCIuL3NjcmlwdHMvZW51bXNcIjtcbmltcG9ydCB7IEFUTSB9IGZyb20gXCIuL3NjcmlwdHMvYXRtXCI7XG5cbmNsYXNzIE1haW4ge1xuICBjaGVja2luZ0FjY291bnQ6IENoZWNraW5nQWNjb3VudDtcbiAgc2F2aW5nc0FjY291bnQ6IFNhdmluZ3NBY2NvdW50O1xuICBjdXJyZW50QWNjb3VudDogQmFua0FjY291bnQ7XG4gIGF0bTogQVRNO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyKSB7fVxuXG4gIGFzeW5jIGxvYWRBY2NvdW50cygpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2RhdGEuanNvblwiKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHRoaXMuY2hlY2tpbmdBY2NvdW50ID0gbmV3IENoZWNraW5nQWNjb3VudCh7IC4uLmRhdGEuY2hlY2tpbmdBY2NvdW50IH0pO1xuICAgIHRoaXMuc2F2aW5nc0FjY291bnQgPSBuZXcgU2F2aW5nc0FjY291bnQoeyAuLi5kYXRhLnNhdmluZ3NBY2NvdW50IH0pO1xuICAgIHRoaXMuYXRtID0gbmV3IEFUTSh0aGlzLmNoZWNraW5nQWNjb3VudCk7XG5cbiAgICBsZXQgaHRtbCA9IHRoaXMucmVuZGVyQWNjb3VudHMoKTtcbiAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcihgXG4gICAgICAgICAgICA8aDI+V2VsY29tZSB0byBBY21lIEJhbmshPC9oMj48YnIgLz5cbiAgICAgICAgICAgIDxpbWFnZSBzcmM9XCJzcmMvaW1hZ2VzL2FjbWViYW5rLmpwZ1wiIGhlaWdodD1cIjE1MFwiPlxuICAgICAgICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICAgICAgICA8aDU+WW91ciBBY2NvdW50czo8L2g1PjxiciAvPlxuICAgICAgICAgICAgJHtodG1sfVxuICAgICAgICBgKTtcbiAgfVxuXG4gIGNoYW5nZVZpZXcodmlldz86IHN0cmluZykge1xuICAgIHN3aXRjaCAodmlldykge1xuICAgICAgY2FzZSBcImNoZWNraW5nXCI6XG4gICAgICAgIHRoaXMuY3VycmVudEFjY291bnQgPSB0aGlzLmNoZWNraW5nQWNjb3VudDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwic2F2aW5nc1wiOlxuICAgICAgICB0aGlzLmN1cnJlbnRBY2NvdW50ID0gdGhpcy5zYXZpbmdzQWNjb3VudDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiYXRtXCI6XG4gICAgICAgIHRoaXMuY3VycmVudEFjY291bnQgPSB0aGlzLmNoZWNraW5nQWNjb3VudDtcbiAgICAgICAgdGhpcy5yZW5kZXJBdG0oKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlckFjY291bnQodGhpcy5jdXJyZW50QWNjb3VudCk7XG4gIH1cblxuICByZW5kZXJBdG0oKSB7XG4gICAgY29uc3QgaHRtbCA9IGBcbiAgICAgICAgICAgICAgICA8aDM+QVRNPC9oMz5cbiAgICAgICAgICAgICAgICA8aW1hZ2Ugc3JjPVwic3JjL2ltYWdlcy9hdG0uanBnXCIgaGVpZ2h0PVwiMTUwXCI+XG4gICAgICAgICAgICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICAgICAgICAgICAgQ3VycmVudCBDaGVja2luZyBBY2NvdW50IEJhbGFuY2U6ICQke3RoaXMuY2hlY2tpbmdBY2NvdW50LmJhbGFuY2V9XG4gICAgICAgICAgICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICAgICAgICAgICAgJDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZGVwb3NpdFdpdGhkcmF3YWxBbW91bnRcIj4mbmJzcDsmbmJzcDtcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uY2xpY2s9XCJtYWluLmRlcG9zaXRXaXRoRHJhd2FsKHRydWUsIHRydWUpXCI+RGVwb3NpdDwvYnV0dG9uPiZuYnNwO1xuICAgICAgICAgICAgICAgIDxidXR0b24gb25jbGljaz1cIm1haW4uZGVwb3NpdFdpdGhEcmF3YWwoZmFsc2UsIHRydWUpXCI+V2l0aGRyYXdhbDwvYnV0dG9uPiZuYnNwO1xuICAgICAgICAgICAgYDtcbiAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcihodG1sKTtcbiAgfVxuXG4gIHJlbmRlckFjY291bnRzKCkge1xuICAgIGxldCBhY2N0c0h0bWw6IHN0cmluZyA9IFwiXCI7XG4gICAgY29uc3QgYWNjTGlzdCA9IG5ldyBBY2NvdW50TGlzdCgpO1xuICAgIGFjY0xpc3QuYWRkKHRoaXMuY2hlY2tpbmdBY2NvdW50KTtcbiAgICBhY2NMaXN0LmFkZCh0aGlzLnNhdmluZ3NBY2NvdW50KTtcblxuICAgIGFjY0xpc3QuZ2V0QWNjb3VudHMoKS5mb3JFYWNoKChhY2N0LCBpbmRleCkgPT4ge1xuICAgICAgYWNjdHNIdG1sICs9IGFjY3QudGl0bGUgKyBcIjxiciAvPlwiO1xuICAgIH0pO1xuICAgIHJldHVybiBhY2N0c0h0bWw7XG4gIH1cblxuICByZW5kZXJBY2NvdW50KGFjY291bnQ6IEJhbmtBY2NvdW50KSB7XG4gICAgY29uc3QgYWNjb3VudFR5cGUgPSBBY2NvdW50VHlwZVthY2NvdW50LmFjY291bnRUeXBlXTtcbiAgICBjb25zdCBodG1sID0gYFxuICAgICAgICAgICAgICAgIDxoMz4ke2FjY291bnRUeXBlfSBBY2NvdW50PC9oMz5cbiAgICAgICAgICAgICAgICA8aW1hZ2Ugc3JjPVwic3JjL2ltYWdlcy8ke2FjY291bnRUeXBlLnRvTG93ZXJDYXNlKCl9LmpwZ1wiIGhlaWdodD1cIjE1MFwiPlxuICAgICAgICAgICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj5Pd25lcjo8L3NwYW4+ICR7YWNjb3VudC50aXRsZX1cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+QmFsYW5jZTo8L3NwYW4+ICQke2FjY291bnQuYmFsYW5jZS50b0ZpeGVkKFxuICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICAgICAgICAgICAgJDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZGVwb3NpdFdpdGhkcmF3YWxBbW91bnRcIj4mbmJzcDsmbmJzcDtcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uY2xpY2s9XCJtYWluLmRlcG9zaXRXaXRoRHJhd2FsKHRydWUpXCI+RGVwb3NpdDwvYnV0dG9uPiZuYnNwO1xuICAgICAgICAgICAgICAgIDxidXR0b24gb25jbGljaz1cIm1haW4uZGVwb3NpdFdpdGhEcmF3YWwoZmFsc2UpXCI+V2l0aGRyYXdhbDwvYnV0dG9uPiZuYnNwO1xuICAgICAgICAgICAgYDtcbiAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcihodG1sKTtcbiAgfVxuXG4gIGRlcG9zaXRXaXRoRHJhd2FsKGRlcG9zaXQ6IGJvb2xlYW4sIGF0bT86IGJvb2xlYW4pIHtcbiAgICBsZXQgYW1vdW50SW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCIjZGVwb3NpdFdpdGhkcmF3YWxBbW91bnRcIlxuICAgICk7XG4gICAgbGV0IGFtb3VudCA9ICthbW91bnRJbnB1dC52YWx1ZTtcbiAgICBsZXQgZXJyb3I7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChkZXBvc2l0KSB7XG4gICAgICAgIGlmIChhdG0pIHtcbiAgICAgICAgICB0aGlzLmF0bS5kZXBvc2l0KGFtb3VudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jdXJyZW50QWNjb3VudC5kZXBvc2l0KGFtb3VudCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChhdG0pIHtcbiAgICAgICAgICB0aGlzLmF0bS53aXRoZHJhd2FsKGFtb3VudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jdXJyZW50QWNjb3VudC53aXRoZHJhd2FsKGFtb3VudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBlcnJvciA9IGU7XG4gICAgfVxuXG4gICAgYXRtID8gdGhpcy5yZW5kZXJBdG0oKSA6IHRoaXMucmVuZGVyQWNjb3VudCh0aGlzLmN1cnJlbnRBY2NvdW50KTtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVuZGVyRXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgfVxuICB9XG59XG5cbi8vIENyZWF0ZSBtYWluIG9iamVjdCBhbmQgYWRkIGhhbmRsZXJzIGZvciBpdFxuY29uc3QgcmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN2aWV3VGVtcGxhdGVcIikpO1xuY29uc3QgbWFpbiA9IG5ldyBNYWluKHJlbmRlcmVyKTtcbm1haW4ubG9hZEFjY291bnRzKCk7XG5cbi8vIFF1aWNrIGFuZCBlYXN5IHdheSB0byBleHBvc2UgYSBnbG9iYWwgQVBJIHRoYXQgY2FuIGhvb2sgdG8gdGhlIE1haW4gb2JqZWN0XG4vLyBzbyB0aGF0IHdlIGNhbiBnZXQgdG8gaXQgZnJvbSBjbGljayBhbmQgZXZlbnRzIGFuZCBvdGhlcnMuXG4vLyBZZXMsIHRoZXJlIGFyZSBvdGhlciB3YXlzIGJ1dCB0aGlzIGdldHMgdGhlIGpvYiBkb25lIGZvciB0aGlzIGRlbW8uXG4oPGFueT53aW5kb3cpLm1haW4gPSBtYWluO1xuIiwiaW1wb3J0IHsgQWNjb3VudCB9IGZyb20gXCIuL2ludGVyZmFjZXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBBY2NvdW50TGlzdCB7XHJcbiAgX2FjY291bnRMaXN0OiBBY2NvdW50W10gPSBbXTtcclxuXHJcbiAgYWRkKGFjY291bnQ6IEFjY291bnQpIHtcclxuICAgIHRoaXMuX2FjY291bnRMaXN0LnB1c2goYWNjb3VudCk7XHJcbiAgfVxyXG5cclxuICBnZXRBY2NvdW50cygpOiBBY2NvdW50W10ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2FjY291bnRMaXN0O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBEZXBvc2l0V2l0aGRyYXdhbCwgQWNjb3VudCB9IGZyb20gXCIuL2ludGVyZmFjZXNcIjtcblxuZXhwb3J0IGNsYXNzIEFUTSBpbXBsZW1lbnRzIERlcG9zaXRXaXRoZHJhd2FsIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhY2NvdW50OiBBY2NvdW50KSB7fVxuXG4gIGRlcG9zaXQoYW1vdW50OiBudW1iZXIpIHtcbiAgICB0aGlzLmFjY291bnQuZGVwb3NpdChhbW91bnQpO1xuICB9XG5cbiAgd2l0aGRyYXdhbChhbW91bnQ6IG51bWJlcikge1xuICAgIHRoaXMuYWNjb3VudC53aXRoZHJhd2FsKGFtb3VudCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEFjY291bnQsIEFjY291bnRJbmZvLCBBY2NvdW50U2V0dGluZ3MgfSBmcm9tIFwiLi9pbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBBY2NvdW50VHlwZSB9IGZyb20gXCIuL2VudW1zXCI7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFua0FjY291bnQgaW1wbGVtZW50cyBBY2NvdW50IHtcclxuICBpZDogbnVtYmVyO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBfYmFsYW5jZSA9IDA7XHJcbiAgYWJzdHJhY3QgYWNjb3VudFR5cGU6IEFjY291bnRUeXBlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihhY2NvdW50U2V0dGluZ3M6IEFjY291bnRTZXR0aW5ncykge1xyXG4gICAgdGhpcy5pZCA9IGFjY291bnRTZXR0aW5ncy5pZDtcclxuICAgIHRoaXMudGl0bGUgPSBhY2NvdW50U2V0dGluZ3MudGl0bGU7XHJcbiAgICB0aGlzLmJhbGFuY2UgPSBhY2NvdW50U2V0dGluZ3MuYmFsYW5jZTtcclxuICB9XHJcblxyXG4gIGRlcG9zaXQoYW1vdW50OiBudW1iZXIpIHtcclxuICAgIHRoaXMuYmFsYW5jZSArPSBhbW91bnQ7XHJcbiAgfVxyXG5cclxuICB3aXRoZHJhd2FsKGFtb3VudDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmJhbGFuY2UgLT0gYW1vdW50O1xyXG4gIH1cclxuXHJcbiAgZ2V0QWNjb3VudEluZm8oKTogQWNjb3VudEluZm88c3RyaW5nLCBudW1iZXI+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJvdXRpbmdOdW1iZXI6IENvbnN0YW50cy5ST1VUSU5HX05VTUJFUixcclxuICAgICAgYmFua051bWJlcjogQ29uc3RhbnRzLkJBTktfTlVNQkVSLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGdldCBiYWxhbmNlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2JhbGFuY2U7XHJcbiAgfVxyXG5cclxuICBzZXQgYmFsYW5jZSh2YWw6IG51bWJlcikge1xyXG4gICAgaWYgKHZhbCA+PSAwKSB7XHJcbiAgICAgIHRoaXMuX2JhbGFuY2UgPSB2YWw7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBFcnJvcihcIkJhbGFuY2UgY2Fubm90IGJlIG5lZ2F0aXZlIVwiKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQmFua0FjY291bnQgfSBmcm9tIFwiLi9iYW5rLWFjY291bnRcIjtcclxuaW1wb3J0IHsgQWNjb3VudFR5cGUgfSBmcm9tIFwiLi9lbnVtc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENoZWNraW5nQWNjb3VudCBleHRlbmRzIEJhbmtBY2NvdW50IHtcclxuICBhY2NvdW50VHlwZSA9IEFjY291bnRUeXBlLkNoZWNraW5nO1xyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBDb25zdGFudHMge1xyXG4gIHN0YXRpYyBnZXQgUk9VVElOR19OVU1CRVIoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBcIjEyMzFBNDQzM1kyXCI7XHJcbiAgfVxyXG4gIHN0YXRpYyBnZXQgQkFOS19OVU1CRVIoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiAxMDAwMDgzNzQ7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBlbnVtIEFjY291bnRUeXBlIHtcbiAgQ2hlY2tpbmcsXG4gIFNhdmluZ3MsXG59XG4iLCJleHBvcnQgY2xhc3MgUmVuZGVyZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZpZXdUZW1wbGF0ZTogSFRNTERpdkVsZW1lbnQpIHtcbiAgICB0aGlzLnZpZXdUZW1wbGF0ZS5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8aDI+V2VsY29tZSB0byBBY21lIEJhbmshPC9oMj5cbiAgICAgICAgICAgIDxpbWFnZSBzcmM9XCJzcmMvaW1hZ2VzL2FjbWViYW5rLmpwZ1wiIGhlaWdodD1cIjE1MFwiPlxuICAgICAgICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICAgICAgICA8aDU+WW91ciBBY2NvdW50czo8L2g1PjxiciAvPmA7XG4gIH1cblxuICByZW5kZXIoaHRtbDogc3RyaW5nKSB7XG4gICAgdGhpcy52aWV3VGVtcGxhdGUuaW5uZXJIVE1MID0gaHRtbDtcbiAgfVxuXG4gIHJlbmRlckVycm9yKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHRoaXMudmlld1RlbXBsYXRlLmlubmVySFRNTCArPSBgPGJyIC8+PGJyIC8+PGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPiR7bWVzc2FnZX08L2Rpdj5gO1xuICB9XG59XG4iLCJpbXBvcnQgeyBCYW5rQWNjb3VudCB9IGZyb20gXCIuL2JhbmstYWNjb3VudFwiO1xyXG5pbXBvcnQgeyBBY2NvdW50VHlwZSB9IGZyb20gXCIuL2VudW1zXCI7XHJcbmltcG9ydCB7IEFjY291bnRTZXR0aW5ncyB9IGZyb20gXCIuL2ludGVyZmFjZXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTYXZpbmdzQWNjb3VudCBleHRlbmRzIEJhbmtBY2NvdW50IHtcclxuICBwcml2YXRlIF9pbnRlcmVzdFJhdGU6IG51bWJlcjtcclxuICBhY2NvdW50VHlwZSA9IEFjY291bnRUeXBlLlNhdmluZ3M7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGFjY291bnRTZXR0aW5nczogQWNjb3VudFNldHRpbmdzKSB7XHJcbiAgICBzdXBlcihhY2NvdW50U2V0dGluZ3MpO1xyXG4gICAgdGhpcy5faW50ZXJlc3RSYXRlID0gYWNjb3VudFNldHRpbmdzLmludGVyZXN0UmF0ZTtcclxuXHJcbiAgICAvLyBTaW11bGF0ZSBpbnRlcmVzdCBvdmVyIHRpbWVcclxuICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgdGhpcy5hZGRJbnRlcmVzdCgpO1xyXG4gICAgfSwgNjAwMDApO1xyXG4gIH1cclxuXHJcbiAgZGVwb3NpdChhbW91bnQ6IG51bWJlcikge1xyXG4gICAgbGV0IG5ld0Ftb3VudCA9IGFtb3VudCArIGFtb3VudCAqICh0aGlzLl9pbnRlcmVzdFJhdGUgLyAxMDApO1xyXG4gICAgdGhpcy5iYWxhbmNlICs9IG5ld0Ftb3VudDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWRkSW50ZXJlc3QoKSB7XHJcbiAgICB0aGlzLmJhbGFuY2UgPSB0aGlzLmJhbGFuY2UgKyB0aGlzLmJhbGFuY2UgKiAodGhpcy5faW50ZXJlc3RSYXRlIC8gMTAwKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==