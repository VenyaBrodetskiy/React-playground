export interface ICounterProps {
    className?: string;
    state: ICounterState;
}
export interface ICounterState {
    id?: number;
    count: number;
    handleIncrement: () => void;
    handleDecrement: () => void;
    handleDelete: () => void;
}