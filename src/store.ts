import {combineReducers, legacy_createStore} from "redux";
import { counterReducer } from "./CounterReducer";
import {settingsReducer} from "./SettingsReducer";


const rootReducer = combineReducers({
    counter: counterReducer,
    settings: settingsReducer
})

export const store = legacy_createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>








