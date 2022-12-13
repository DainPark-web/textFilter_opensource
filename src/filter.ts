interface calI {
  [key: string]: number;
}

export class textFilter {
  private readonly getText: string;
  private words: any[];
  private letters: any[];
  private sentences: any[];

  constructor(text: string) {
    this.getText = text;
    this.words = [];
    this.letters = [];
    this.sentences = [];
  }


  private search(text?:string):string[]{
    const list:any[] = []
    this.sentences.forEach(v => {
      const reg = new RegExp(`(${text})`, 'i')
      const d = v.match(reg)
      
      if(d){
        list.push(v)
      }

    })
    return list;

  }
  private cal(list: string[]): calI {
    const newList = list.map((t) => t.toLowerCase());
    const calO: any = {};

    newList.forEach((v) => {
      if (calO[v]) {
        calO[v] = calO[v] + 1;
      } else {
        calO[v] = 1;
      }
    });

    return calO;
  }

  private getUnique(list: string[]): string[] {
    const unique = list.map((letter) => {
      return letter.toUpperCase();
    });
    const uniqueSet = new Set(unique);
    const uniqueList = [...uniqueSet];

    return uniqueList;
  }

  private getSentencesStartWidth(): any[]{
    const startsWords = this.sentences.map((sen) => {
        // console.log(sen)
        const neS = sen;
        const list = neS.split(" ")[0].toLowerCase();
        return list;

    })
    const startsWordsSet = new Set(startsWords);
    const startsWordsUList = [...startsWordsSet]
    
    const cal:any = {}
    // console.log(startsWordsUList)
    startsWordsUList.forEach(value => {
      if(this.sentences.length > 0){
        this.sentences.forEach(va => {
          const d = va.toLowerCase()
          if(d.startsWith(value)){
            if(cal[value]){
              cal[value] = [...cal[value], va]
            }else{
              cal[value] = [va]
            }
          }
        })
      }
    })

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

  getSentences(searchWord?: string) {
    const list = this.getText.split(".").map((text) => {
      const newT = text.trim();
      return newT;
    });
    this.sentences = list.filter((sen) => sen !== "");
    const uniqueList = this.getUnique(this.sentences);

    const startList = this.getSentencesStartWidth();
    
    const searchResult = this.search(searchWord)
  
    return {
      sentences: this.sentences,
      unique: uniqueList,
      length: this.sentences.length,
      cal: this.cal(this.sentences),
      startList: startList,
      searchResult:searchResult
    };
  }


  getData() {
    const letter = this.getLetters();
    const word = this.getWords();
    const sentence = this.getSentences();
    return {
        letter,
        word,
        sentence
    };
  }
}
