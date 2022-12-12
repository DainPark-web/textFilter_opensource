interface calI{
    [key: string]: number;
   
}

export class textFilter {
    private getText:string
    private words:any[]
    private letters:any[]

    constructor(text:string){
        this.getText = text;
        this.words = [];
        this.letters = [];
    }
    private cal(list:string[]):calI{
        const newList = list.map((t) => t.toLowerCase());
        const calO:any = {};

        newList.forEach((v) => {
            if(calO[v]){
                calO[v] = calO[v] + 1;
            }else{
                calO[v] = 1;
            }
        })

        return calO
    }

    private getUnique(list:string[]):string[]{
        const unique = list.map((letter) => {
            return letter.toUpperCase();
        })
        const uniqueSet = new Set(unique);
        const uniqueList = [...uniqueSet];

        return uniqueList
    }


    getLetters(){
        this.letters = this.getText.split("").filter((letter) => {
            if(letter !== " "){
                return letter;
            }
        });
        const uniqueList = this.getUnique(this.letters);
        return {
            letters: this.letters,
            unique: uniqueList,
            length: this.letters.length,
            cal: this.cal(this.letters)
        }
    }

    getWords(){
        this.words = this.getText.split(" ")
        const uniqueList = this.getUnique(this.words);
        return {
            words: this.words,
            unique: uniqueList,
            length: this.words.length,
            cal: this.cal(this.words),
            
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

