import React from 'react';
import {Button} from "./Button";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store";
import {incrementCounterAC, setCounterValueAC} from "./CounterReducer";
import {showSettingsAC} from "./SettingsReducer";

export const Counter = () => {

    const value = useSelector<AppRootStateType, number>(state => state.counter.value)
    const maxValue = useSelector<AppRootStateType, number>(state => state.settings.maxValue)
    const startValue = useSelector<AppRootStateType, number>(state => state.settings.startValue)


    const dispatch = useDispatch()

    const addCounter = () => {
        dispatch(incrementCounterAC(maxValue))
    }

    const resetCounter = () => {
        dispatch(setCounterValueAC(startValue));
    }

    const showSettings = () => {
        dispatch(showSettingsAC(true));
    }

    return (
        <div className="div">
            <div  className="Content">
            <div className={value >= maxValue ? "Red" : "Black"}>{value}</div>
            <div>
                <Button
                    clickHandler={addCounter}
                    label={'click'}
                    disabled={value >= maxValue}
                />
                <Button
                    clickHandler={resetCounter}
                    label={'reset'}
                />
                <Button
                    clickHandler={showSettings}
                    label={'set'}
                />
            </div>
            </div>
        </div>
    );
};
