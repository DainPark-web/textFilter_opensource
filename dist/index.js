"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.textFilter = void 0;
const filter_1 = require("./filter");
Object.defineProperty(exports, "textFilter", { enumerable: true, get: function () { return filter_1.textFilter; } });
const d = new filter_1.textFilter("I'm Dain Park");
console.log(d.getData());
