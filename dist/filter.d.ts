interface calI {
    [key: string]: number;
}
export declare class textFilter {
    private getText;
    private words;
    private letters;
    constructor(text: string);
    private cal;
    private getUnique;
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
    getData(): ({
        letters: any[];
        unique: string[];
        length: number;
        cal: calI;
    } | {
        words: any[];
        unique: string[];
        length: number;
        cal: calI;
    })[];
}
export {};
