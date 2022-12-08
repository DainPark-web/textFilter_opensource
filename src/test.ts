type t = {
    <T>(value: T): T
}


export const sayName:t = (name) => {
    return name;
}