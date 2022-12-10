type t = {
    (value: string): any[];
}


export const getWords:t = (name) => {
    const getData = name.split("");
    return [
        [""],
        {
            dain: ""
        }
    ]
}