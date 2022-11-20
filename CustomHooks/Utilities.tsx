import {useState} from "react";

export class DisplayPopUpHook {
    State: boolean
    HandleToggle: Function
    HandleTrue: Function
    HandleFalse: Function
}

function useDisplayPopUpHook(initialState): DisplayPopUpHook {
    let [display, setDisplay] = useState(initialState)
    const handleToggle = () => setDisplay(!display)
    const handleTrue = () => setDisplay(true)
    const handleFalse = () => setDisplay(false)

    const displayHookProps: DisplayPopUpHook = {
        State: display,
        HandleToggle: handleToggle,
        HandleTrue: handleTrue,
        HandleFalse: handleFalse
    }

    return (displayHookProps)
}

export default useDisplayPopUpHook





