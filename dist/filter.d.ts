export declare class textFilter {
    private getText;
    private words;
    private letters;
    constructor(text: string);
    getLetters(): {
        letters: any[];
        unique: any[];
        length: number;
    };
    getWords(): {
        words: any[];
        length: number;
    };
    getData(): ({
        letters: any[];
        unique: any[];
        length: number;
    } | {
        words: any[];
        length: number;
    })[];
}
