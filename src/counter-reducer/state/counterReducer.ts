import { CounterAction } from "../action/action";
import { CounterState } from "../interfaces/counterInterfaces";



export const counterReducer = (state: CounterState, action: CounterAction): CounterState => {

    switch (action.type) {
        case "reset":
            return {
                counter: 0,
                previus: 0,
                changes: 0,
            }
        case "increaseBy":

            return {
                counter: state.counter + action.payload.value,
                previus: state.counter,
                changes: state.changes + 1,
            }
        default:
            return state;
    }
}