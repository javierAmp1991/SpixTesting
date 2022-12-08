import CustomInput, {CustomInputProps, TypeInput} from "../../Desktop/Misc/customInput";
import PopUpContainerFull from "../../Desktop/Misc/popUpContainerFull";
import ButtonCustom, {ButtonProps} from "../../Desktop/Misc/button";
import style from "/styles/Mobile/UserAccount/popUpReorder.module.css"
import {useEffect, useState} from "react";

export class PopUpReorderProps {
    NameInput: string
    Placeholder: string
    MinValue: number
    MaxValue: number
    ActualPosition: number
    HandleAccept: Function
    HandleClose: Function
}

export default function PopUpReorder({item}: { item: PopUpReorderProps }) {
    let [newValue, setNewValue] = useState("")
    let [samePosition, setSamePosition] = useState(false)
    let [invalidNumber, setInvalidNumber] = useState(false)

    const handleOnChange = (e) => setNewValue(e.target.value)
    const handleClose = () => item.HandleClose()
    const handleAccept = () => {
        !samePosition && !invalidNumber && item.HandleAccept(newValue)
    }

    const customInput: CustomInputProps = {
        NameInput: item.NameInput,
        Value: newValue,
        TypeInput: TypeInput.Input,
        TypeTextInput: `number`,
        Onchange: handleOnChange,
        PlaceholderInput: item.Placeholder,

    }
    const buttonProps: ButtonProps = {
        Text: "Aplicar",
        OnClick: handleAccept
    }

    useEffect(() => {
        let pos: number = parseInt(newValue)
        setSamePosition(pos == item.ActualPosition)
        setInvalidNumber(pos < item.MinValue || pos > item.MaxValue)
    }, [newValue])

    return (
        <PopUpContainerFull closePopUp={handleClose} isButtonVisible={true} isBackground={true}>
            <div className={style.mainDiv}>
                <CustomInput item={customInput}/>
                {
                    samePosition &&
                    <div className={style.colorError}>
                        * Estas moviendo a la misma posicion
                    </div>
                }
                {
                    invalidNumber &&
                    <div className={style.colorError}>
                        * La posiscion que estas ingresando no es valida
                    </div>
                }
                <ButtonCustom item={buttonProps}/>
            </div>
        </PopUpContainerFull>
    )
}