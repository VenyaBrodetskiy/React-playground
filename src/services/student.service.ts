export interface IStudent {
    id: number,
    name: string,
    age: number
}

export const getStudentsArray = (): IStudent[] => {
    let studentsArray: IStudent[] = [
        { id: 1, name: "John", age: 23 },
        { id: 2, name: "Jane", age: 25 },
        { id: 3, name: "Alex", age: 27 },
        { id: 4, name: "Elias", age: 31 },
    ]
    return studentsArray;
}