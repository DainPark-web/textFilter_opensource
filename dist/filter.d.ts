interface calI {
    [key: string]: number;
}
export declare class textFilter {
    private readonly getText;
    private words;
    private letters;
    private sentences;
    constructor(text: string);
    private search;
    private cal;
    private getUnique;
    private getSentencesStartWidth;
    getLetters(): {
        letters: any[];
        unique: string[];
        length: number;
        cal: calI;
    };
    getWords(): {
        words: any[];
        unique: string[];
        length: number;
        cal: calI;
    };
    getSentences(searchWord?: string): {
        sentences: any[];
        unique: string[];
        length: number;
        cal: calI;
        startList: any[];
        searchResult: string[];
    };
    getData(): {
        letter: {
            letters: any[];
            unique: string[];
            length: number;
            cal: calI;
        };
        word: {
            words: any[];
            unique: string[];
            length: number;
            cal: calI;
        };
        sentence: {
            sentences: any[];
            unique: string[];
            length: number;
            cal: calI;
            startList: any[];
            searchResult: string[];
        };
    };
}
export {};
