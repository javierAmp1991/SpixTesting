import style from "/styles/Desktop/Misc/searchBarNew.module.css"
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import {SearchBarProps} from "../../../Class/Misc/GlobalClass";
import {useState} from "react";

const displaySugNumber: number = 3;

export default function SearchBarNew({item}: { item: SearchBarProps }) {
    let [displaySug, setDisplaySug] = useState(false)
    const handleOnFocus = (e) => {
        if (e.target.value.length >= displaySugNumber) setDisplaySug(displaySug = true)
        item.OnChangeInput(e.target.value)
    }
    const handleOnChange = (e) => {
        if (e.target.value.length >= displaySugNumber) setDisplaySug(displaySug = true)
        item.OnChangeInput(e.target.value)
    }
    const handleValueInputTest = (e: string) => item.OnChangeInput(e)
    const handleOnClick = () => item.OnClick()
    const onBlurInput = () => setDisplaySug(displaySug = false)
    const handleCleanSuggestion = () => {
        item.CleanSuggestions()
    }
    const cssStyle = getCssStyle()

    return (
        <div className={cssStyle.mainDiv}>
            <input value={item.Value} onChange={handleOnChange} onBlur={onBlurInput} onFocus={handleOnFocus}
                   placeholder={item.Placeholder} type={"text"}/>
            {
                item.Suggestions.length > 0 &&
                <button onClick={handleCleanSuggestion} className={style.sizeClose}>
                    <Image layout={"fill"} src={GlobalConst.sourceImages.closeLoggin} alt=""/>
                </button>
            }
            <button onClick={handleOnClick} className={style.sizeGlass}>
                <Image layout={"fill"} src={GlobalConst.sourceImages.magGlassGray} alt=""/>
            </button>
            {
                displaySug &&
                <div className={style.ContSug}>
                    {
                        item.Suggestions.map((itemSug) =>
                            <button className={style.buttonSug} onMouseDown={() => handleValueInputTest(itemSug)}
                                    key={itemSug}>
                                {itemSug}
                            </button>)
                    }
                </div>
            }
        </div>
    )

    function getCssStyle() {
        return {
            mainDiv: displaySug ? style.mainDivWithSug : style.mainDiv
        }
    }
}