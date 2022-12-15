"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.textFilter = void 0;
class textFilter {
    constructor(text) {
        this.getText = text;
        this.words = [];
        this.letters = [];
        this.sentences = [];
    }
    search(text) {
        const list = [];
        this.sentences.forEach((v) => {
            const reg = new RegExp(`(${text})`, "i");
            const d = v.match(reg);
            if (d) {
                list.push(v);
            }
        });
        return list;
    }
    cal(list) {
        const newList = list.map((t) => t.toLowerCase());
        const calO = {};
        newList.forEach((v) => {
            if (calO[v]) {
                calO[v] = calO[v] + 1;
            }
            else {
                calO[v] = 1;
            }
        });
        return calO;
    }
    getUnique(list) {
        const unique = list.map((letter) => {
            return letter.toUpperCase();
        });
        const uniqueSet = new Set(unique);
        const uniqueList = [...uniqueSet];
        return uniqueList;
    }
    getSentencesStartWidth() {
        const startsWords = this.sentences.map((sen) => {
            // console.log(sen)
            const neS = sen;
            const list = neS.split(" ")[0].toLowerCase();
            return list;
        });
        const startsWordsSet = new Set(startsWords);
        const startsWordsUList = [...startsWordsSet];
        const cal = {};
        // console.log(startsWordsUList)
        startsWordsUList.forEach((value) => {
            if (this.sentences.length > 0) {
                this.sentences.forEach((va) => {
                    const d = va.toLowerCase();
                    if (d.startsWith(value)) {
                        if (cal[value]) {
                            cal[value] = [...cal[value], va];
                        }
                        else {
                            cal[value] = [va];
                        }
                    }
                });
            }
        });
        return cal;
    }
    getLetters() {
        this.letters = this.getText.split("").filter((letter) => {
            if (letter !== " ") {
                return letter;
            }
        });
        const uniqueList = this.getUnique(this.letters);
        return {
            letters: this.letters,
            unique: uniqueList,
            length: this.letters.length,
            cal: this.cal(this.letters),
        };
    }
    getWords() {
        this.words = this.getText.split(" ");
        const uniqueList = this.getUnique(this.words);
        return {
            words: this.words,
            unique: uniqueList,
            length: this.words.length,
            cal: this.cal(this.words),
        };
    }
    getSentences(searchWord) {
        const list = this.getText.split(".").map((text) => {
            const newT = text.trim();
            return newT;
        });
        this.sentences = list.filter((sen) => sen !== "");
        const uniqueList = this.getUnique(this.sentences);
        const startList = this.getSentencesStartWidth();
        const searchResult = this.search(searchWord);
        return {
            sentences: this.sentences,
            unique: uniqueList,
            length: this.sentences.length,
            cal: this.cal(this.sentences),
            startList: startList,
            searchResult: searchResult,
        };
    }
    getData() {
        const letter = this.getLetters();
        const word = this.getWords();
        const sentence = this.getSentences();
        return {
            letter,
            word,
            sentence,
        };
    }
}
exports.textFilter = textFilter;
