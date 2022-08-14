import {GlobalConst} from "../../../public/globalConst";
import utilities from "/styles/utilities.module.css"
import style from "/styles/Desktop/Misc/searchBarDesk.module.css"
import {func} from "prop-types";
import {useState} from "react";

const placeHolder: string = "Buscar evento, categoria o ciudad"
const nameInput: string = "searchBarMobile"

export default function SearchBarDesk({isSug, showSug, hiddeSug, getInputValue}:
                                          { isSug: boolean, showSug: any, hiddeSug: any, getInputValue: any }) {
    let [valueInput, setValueInput] = useState("")
    const handleValueInput = (e) => {
        let valueInput = e.target.value
        if (valueInput.length >= 3) {
            showSug()
            getInputValue(valueInput)
        } else hiddeSug()
        setValueInput(valueInput = e.target.value)
    }
    const cssStyle = getCssStyle()
    return (
        <div className={`${utilities.fontSecundaryText} ${style.mainCont}`}>
            <input onBlur={hiddeSug}
                   onFocus={handleValueInput}
                   onChange={handleValueInput}
                   autoComplete="off"
                   className={cssStyle.styleInput}
                   type="text" name={nameInput}
                   placeholder={placeHolder}/>
            <div className={cssStyle.styleButton}>
                <button>
                    <img className={style.styleLupa} src={cssStyle.sourceMagGlass} alt=""/>
                </button>
            </div>
        </div>
    )

    function getCssStyle() {
        return {
            styleButton: isSug ? style.StyleButtonSug : style.styleButton,
            sourceMagGlass: isSug ? GlobalConst.sourceImages.magGlassGray : GlobalConst.sourceImages.magGlass,
            styleInput: isSug ? style.styleInputSug : style.styleInput
        }
    }
}