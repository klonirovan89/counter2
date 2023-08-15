
type SettingsStateType = {
    maxValue: number,
    startValue: number,
    isShown: boolean
}

const initialState: SettingsStateType = {
    maxValue: 5,
    startValue: 0,
    isShown: false
}

type SettingsActionType = ChangeStartValueType | ChangeMaxValueType | ShowSettingsType;

type ChangeStartValueType = {
    type: 'CHANGE_START_VALUE',
    value: number
}

type ChangeMaxValueType = {
    type: 'CHANGE_MAX_VALUE',
    value: number
}

type ShowSettingsType = {
    type: 'SHOW_SETTINGS',
    isShown: boolean
}

export const settingsReducer = (settingsState: SettingsStateType = initialState, action: SettingsActionType) => {
    switch (action.type) {
        case 'CHANGE_START_VALUE': {
            return {
                ...settingsState, startValue: action.value
            }
        }
        case 'CHANGE_MAX_VALUE': {
            return {
                ...settingsState, maxValue: action.value
            }
        }
        case 'SHOW_SETTINGS': {
            return {
                ...settingsState, isShown: action.isShown
            }
        }
        default:
            return settingsState;
    }
}

export const changeStartValueAC = (value: number): ChangeStartValueType => {
    return {
        type: 'CHANGE_START_VALUE',
        value
    }
}

export const changeMaxValueAC = (value: number): ChangeMaxValueType => {
    return {
        type: 'CHANGE_MAX_VALUE',
        value
    }
}

export const showSettingsAC = (isShown: boolean): ShowSettingsType => {
    return {
        type: 'SHOW_SETTINGS',
        isShown
    }
}