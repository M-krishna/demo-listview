"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ListView_1 = __importDefault(require("./ListView"));
var App = function () {
    var data = [
        { message: "Hello There" },
        { message: "Hello There" },
        { message: "Hello There" },
        { message: "Hello There" },
        { message: "Hello There" }
    ];
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(ListView_1.default, { data: data })));
};
exports.default = App;
//# sourceMappingURL=App.js.map