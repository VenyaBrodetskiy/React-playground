export const getCounter = () => {
    for (let i = 0; i <= 10000; i++) {
        console.log(i);
    }

    const CounterArray = [
        { id: 1, count: 0 },
        { id: 2, count: 0 },
        { id: 3, count: 0 },
        { id: 4, count: 0 }
    ];
    return CounterArray;
}