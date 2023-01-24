import React from "react";

import { CounterComponent } from "../counter/counter.component";
import { UseCounterContainer } from "./counterContainer.hook";

import "./style.css";



export const CounterContainerComponent = () => {
    
    const { total, counters, handleDelete, handleIncrement, handleDecrement, handleReset} = UseCounterContainer()

    return <div className="counters-main-container">
        <nav className="navbar navbar-light bg-light">
            <div className="btn btn-primary">
                {total}                
            </div>
        </nav>
        <div className="counters-container">
            <button className="btn btn-secondary" onClick={handleReset}>
                Reset
            </button>
            {counters.map((counter) => <>
                <CounterComponent
                    key={counter.id}
                    className="counter-item"
                    state={{
                        id: counter.id,
                        count: counter.count,
                        handleIncrement: () => handleIncrement(counter.id),
                        handleDecrement: () => handleDecrement(counter.id),
                        handleDelete: () => handleDelete(counter.id)
                    }}
                />
            </>)}
        
        </div>
    </div>;
}