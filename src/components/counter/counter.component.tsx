import React from "react";
import { ICounterProps } from "../../interfaces/props/counter.interface";
import "./style.css";

export const CounterComponent = ({ className, state } : ICounterProps) => {
    const getCountStyle = () => {
        let classes = "btn";
        if (state.count === 0) {
            classes += " btn-warning"
        } else {
            classes += " btn-primary ms-2"
        }
        return classes;
    };

    const formatValue = () => {
        const text = "Zero";
        if (state.count === 0) {
            return text;
        } else {
            return state.count
        }
    };

    const getDecrementStyle = () => {
        let classes = "btn btn-secondary";
        if (state.count === 0) {
            classes += " disabled";
        } else {
            classes += " btn-secondary";
        }
        return classes;
    }
    return <div className={"btn-container " + className}>
        <span className={getCountStyle()}>{ formatValue() }</span>
        <button className="btn btn-secondary" onClick={state.handleIncrement}>+</button>
        <button className={getDecrementStyle()} onClick={state.handleDecrement}>-</button>
        <button className="btn btn-danger" onClick={state.handleDelete}>Delete</button>

    </div>;
}