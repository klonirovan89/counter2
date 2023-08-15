import React from 'react'
import './App.css'
import {Counter} from "./Counter";
import {Settings} from './Settings';
import {useSelector} from "react-redux";
import {AppRootStateType} from "./store";

function App() {
    const showSettings = useSelector<AppRootStateType, boolean>(state => state.settings.isShown)

    return (
        <div className="App">
            {
                showSettings
                    ?
                    <Settings />
                    :
                    <Counter />
            }
        </div>
    )
}

export default App;