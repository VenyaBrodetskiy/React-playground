import React, { useState } from "react";
import { getCounter } from "../../services/counter.service";

export function UseCounterContainer() {
    const CounterArray = getCounter();

    const [counters, setCounters] = useState(CounterArray);
    const [total, setTotal] = useState(0);

    const handleDelete = (id: number) => {
        console.log("Delete", id);
        let current = counters.find((counter) => counter.id === id);
        current && setTotal(total - current.count);

        const newCounters = counters.filter((counter) => counter.id !== id);
        setCounters(newCounters);
    };
    const handleIncrement = (id: number) => {
        console.log("Increment", id);
        const newCounters = [...counters];
        const index = newCounters.findIndex((counter) => counter.id === id);
        newCounters[index].count++;
        setCounters(newCounters);
        setTotal(total + 1);
    };
    const handleDecrement = (id: number) => {
        console.log("Decrement", id);
        const newCounters = [...counters];
        const index = newCounters.findIndex((counter) => counter.id === id);
        newCounters[index].count--;
        setCounters(newCounters);
        setTotal(total - 1);

    };
    const handleReset = () => {
        console.log("reset");
        setCounters(CounterArray);
        setTotal(0);
    };

    return {
        total,
        counters,
        handleDelete,
        handleIncrement,
        handleDecrement,
        handleReset
    };
}