// interface getWordsI{
//     (name: string): any;
   
// }

export class textFilter {
    private getText:string
    private words:any[]
    private letters:any[]

    constructor(text:string){
        this.getText = text;
        this.words = [];
        this.letters = [];
    }


    getLetters(){
        this.letters = this.getText.split("").filter((letter) => {
            if(letter !== " "){
                return letter;
            }
        });
        const unique = this.letters.map((letter) => {
            return letter.toUpperCase();
        })
        const uniqueSet = new Set(unique);
        const uniqueList = [...uniqueSet];


        return {
            letters: this.letters,
            unique: uniqueList,
            length: this.letters.length
        }
    }

    getWords(){
        this.words = this.getText.split(" ")
        return {
            words: this.words,
            length: this.words.length
        }
    }


    getData(){
        const letter = this.getLetters();
        const word = this.getWords();
        return [
            letter,
            word
        ]
    }
}

