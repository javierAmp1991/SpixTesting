import {GlobalConst} from "../../../public/globalConst";
import utilities from "/styles/utilities.module.css"
import style from "/styles/Mobile/Misc/searchBarMobile.module.css"
import {useState} from "react";
import Image from "next/image";
import Link from "next/link";

const placeHolder: string = "Buscar evento, categoria o ciudad"
const nameInput: string = "searchBarMobile"

export default function SearchBarMobile({isDisplaySug, isSug, showSug, hiddeSug, getTextInput}:
                                            {
                                                isDisplaySug: any, styleSearchBar: boolean,
                                                showSug: any, hiddeSug: any, getTextInput: any, isSug: boolean
                                            }) {

    let [isDisplayResult, setIsDisplayResult] = useState(false)
    let [getValue, setGetValue] = useState("")
    const getValueInput = (e) => {
        const valueInput = e.target.value
        if (valueInput.length > 3) {
            showSug()
            getTextInput(valueInput)
        } else hiddeSug()
        getValue = valueInput
    }

    return (
        <div className={`${utilities.fontSecundaryText} ${style.mainCont}`}>

            {
                !isSug &&
                <Link href={"/search"}>
                    <div className={style.spixLogoCont}>
                        <div className={style.spixLogoPro}>
                            <Image layout={"fill"} src={GlobalConst.sourceImages.magGlassGray} alt=""/>
                        </div>
                    </div>
                </Link>
            }
            <input onFocus={isDisplaySug}
                   onChange={getValueInput}
                   autoComplete="off"
                   className={style.styleInputSug}
                   type="text" name={nameInput}
                   placeholder={placeHolder}/>
            {
                isSug &&
                <Link href={"/search"}>
                    <div className={style.styleButton}>
                        <button className={style.styleLupa}>
                            <Image layout={"fill"} src={GlobalConst.sourceImages.magGlass} alt=""/>
                        </button>
                    </div>
                </Link>
            }
        </div>
    )
}