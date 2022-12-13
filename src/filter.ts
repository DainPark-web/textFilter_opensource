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

  private getSentencesStartWidth(list: string[]): any[]{
    const startsWords = this.sentences.map((sen) => {
        console.log(sen)
        const neS = sen;
        const list = neS.split(" ")[0].toLowerCase();
        return list;

    })
    const startsWordsSet = new Set(startsWords);
    const startsWordsUList = [...startsWordsSet]
    
    const cal:any = {}

    startsWordsUList.forEach((v) => {
        //여기서부터 하기
        // cal[v] = [...cal[v]]
    })

    return []
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

  getSentences(findStartSentence?: string) {
    const list = this.getText.split(".").map((text) => {
      const newT = text.trim();
      return newT;
    });
    this.sentences = list.filter((sen) => sen !== "");
    const uniqueList = this.getUnique(this.sentences);

    const startList = this.getSentencesStartWidth(this.sentences );

    return {
      sentences: this.sentences,
      unique: uniqueList,
      length: this.sentences.length,
      cal: this.cal(this.sentences),
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
