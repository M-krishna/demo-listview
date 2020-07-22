"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ListView = function (_a) {
    var data = _a.data;
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("ul", null, data.map(function (e, i) {
            return (react_1.default.createElement("li", { key: i }, e.message));
        }))));
};
exports.default = ListView;
//# sourceMappingURL=ListView.js.map