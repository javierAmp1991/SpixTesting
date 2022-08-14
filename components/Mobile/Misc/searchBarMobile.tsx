import {GlobalConst} from "../../../public/globalConst";
import utilities from "/styles/utilities.module.css"
import style from "/styles/Mobile/Misc/searchBarMobile.module.css"
import {func} from "prop-types";
import {useState} from "react";

const placeHolder: string = "Buscar evento, categoria o ciudad"
const nameInput: string = "searchBarMobile"

export default function SearchBarMobile({isDisplaySug, styleSearchBar, showSug, hiddeSug, getTextInput}:
                                            {
                                                isDisplaySug: any, styleSearchBar: boolean,
                                                showSug: any, hiddeSug: any, getTextInput: any
                                            }) {

    let [isDisplayResult, setIsDisplayResult] = useState(false)
    let [getValue, setGetValue] = useState("")
    const getValueInput = (e) => {
        const valueInput = e.target.value
        if(valueInput.length > 3) {
            showSug()
            getTextInput(valueInput)
        }
        else hiddeSug()
        getValue = valueInput
    }

    return (
        <div className={`${utilities.fontSecundaryText} ${style.mainCont}`}>
            <div className={style.spixLogoCont}>
                <img className={style.spixLogoPro} src={GlobalConst.sourceImages.spixAlone} alt=""/>
            </div>
            <input onChange={getValueInput}
                   onFocus={isDisplaySug}
                   autoComplete="off"
                   className={style.styleInput}
                   type="text" name={nameInput}
                   placeholder={placeHolder}/>
            <div className={style.styleButton}>
                <button>
                    <img className={style.styleLupa} src={GlobalConst.sourceImages.magGlass} alt=""/>
                </button>
            </div>
        </div>
    )
}