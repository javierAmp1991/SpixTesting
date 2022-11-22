import {useState} from "react";
import utilities from "/styles/utilities.module.css";

export class DisplayPopUpHook {
    State: boolean
    HandleToggle: Function
    HandleTrue: Function
    HandleFalse: Function
}

function useDisplayPopUpHook(initialState): DisplayPopUpHook {
    let [display, setDisplay] = useState(initialState)
    const handleToggle = () => {
        setDisplay(!display)
        document.body.classList.toggle(utilities.noScrollBody)
    }
    const handleTrue = () => {
        setDisplay(true)
        document.body.classList.add(utilities.noScrollBody)
    }
    const handleFalse = () => {
        setDisplay(false)
        document.body.classList.remove(utilities.noScrollBody)
    }

    const displayHookProps: DisplayPopUpHook = {
        State: display,
        HandleToggle: handleToggle,
        HandleTrue: handleTrue,
        HandleFalse: handleFalse
    }

    return (displayHookProps)
}

export default useDisplayPopUpHook





