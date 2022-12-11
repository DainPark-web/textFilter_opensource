interface getWordsI{
    (name: string): any[]
}


export const getWords:getWordsI = (name) => {
    const getData = name.split("");
    


    return [
        [""],
        {
            dain: ""
        }
    ]
}