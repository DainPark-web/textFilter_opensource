import { textFilter } from "./filter";

const d = new textFilter(`dain park. 
hi your name is dain park. Dain park`);
// console.log(d.getData());
// console.log(d.getWords());
console.log(d.getSentences());
// console.log(d.getLetters());


export { textFilter };