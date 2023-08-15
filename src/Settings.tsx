import React, {ChangeEvent, useState} from 'react';
import {Button} from "./Button";
import {useDispatch, useSelector} from "react-redux";
import {changeMaxValueAC, changeStartValueAC, showSettingsAC} from "./SettingsReducer";
import {AppRootStateType} from "./store";
import {setCounterValueAC} from "./CounterReducer";


export const Settings = () => {
    const startValue = useSelector<AppRootStateType, number>(state => state.settings.startValue)
    const maxValue = useSelector<AppRootStateType, number>(state => state.settings.maxValue)

    const [tempMaxValue, setTempMaxValue] = useState<number>(maxValue);
    const [tempStartValue, setTempStartValue] = useState<number>(startValue);

    const dispatch = useDispatch()

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newMaxValue = Number(e.currentTarget.value);
        setTempMaxValue(newMaxValue)
    }

    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newStartValue = Number(e.currentTarget.value)
        setTempStartValue(newStartValue)
    }

    const saveSettings = () => {
        dispatch(changeStartValueAC(tempStartValue));
        dispatch(changeMaxValueAC(tempMaxValue));
        dispatch(setCounterValueAC(tempStartValue));
        dispatch(showSettingsAC(false));
    }

    return (
        <div className="div">
            <div className="Content">
                <div className="Input">
                    <div className="InputContent">
                        <label htmlFor="max-value">max value:</label>
                        <div className="InputBorder">
                            <input className={tempStartValue >= tempMaxValue || tempMaxValue < 0? "InputErrorValue" : "InputValue"}
                                   id="max-value"
                                   type="number"
                                   value={tempMaxValue}
                                   onChange={onChangeMaxValueHandler}
                            />
                        </div>
                    </div>
                    <div className="InputContent">
                        <label htmlFor="start-value">start value:</label>
                        <input
                            className={tempStartValue < 0 || tempStartValue >= tempMaxValue ? "InputErrorValue" : "InputValue"}
                            id="start-value"
                            type="number"
                            value={tempStartValue}
                            onChange={onChangeStartValueHandler}
                        />
                    </div>
                </div>
                <Button
                    clickHandler={saveSettings}
                    label={'set'}
                    disabled={tempStartValue < 0 || tempStartValue >= tempMaxValue}
                />
            </div>
        </div>
    );
};
