
type CounterStateType = {
    value: number
}

const initialCounterState = {
    value: 0
}

type IncrementCounterType = {
    type: 'INCREMENT_COUNTER',
    maxValue: number
}

type SetCounterValueType = {
    type: 'SET_COUNTER_VALUE',
    value: number
}

type ActionsType = IncrementCounterType | SetCounterValueType;

export const counterReducer = (counterState: CounterStateType = initialCounterState, action: ActionsType) => {
    switch (action.type) {
        case 'INCREMENT_COUNTER': {
            const newValue = counterState.value < action.maxValue ? counterState.value + 1 : counterState.value;
            return {
                ...counterState, value: newValue
            }
        }
        case 'SET_COUNTER_VALUE': {
            return {
                ...counterState, value: action.value
            }
        }
        default:
            return counterState;
    }
}

export const incrementCounterAC = (maxValue: number): IncrementCounterType => {
    return {
        type: 'INCREMENT_COUNTER',
        maxValue
    }
}

export const setCounterValueAC = (value: number): SetCounterValueType => {
    return {
        type: 'SET_COUNTER_VALUE',
        value
    }
}


