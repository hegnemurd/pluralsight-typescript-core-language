"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const APIServer_1 = __importDefault(require("./APIServer"));
const server = new APIServer_1.default();
class APIRoutes {
    indexRoute(req, res) {
        return {
            Hello: "World",
        };
    }
}
__decorate([
    logRoute(),
    route("get", "/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], APIRoutes.prototype, "indexRoute", null);
function route(method, path) {
    return function (target, propertyKeyL, descriptor) {
        server.app[method](path, (req, res) => {
            res.status(200).json(descriptor.value(req, res));
        });
    };
}
function logRoute() {
    return function (target, propertyKey, descriptor) {
        const original = descriptor.value;
        descriptor.value = function (...args) {
            let req = args[0];
            console.log(`${req.url} ${req.method} Called`);
            return original.apply(this, args);
        };
    };
}
server.start();
//# sourceMappingURL=app.js.map