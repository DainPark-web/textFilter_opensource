"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.textFilter = void 0;
const filter_1 = require("./filter");
Object.defineProperty(exports, "textFilter", { enumerable: true, get: function () { return filter_1.textFilter; } });
const d = new filter_1.textFilter(`dain park. 
hi your name is dain park. Dain park. Hi good morning. Dain is designer`);
// console.log(d.getData());
// console.log(d.getWords());
// console.log(d.getSentences());
console.log(d.getLetters());
