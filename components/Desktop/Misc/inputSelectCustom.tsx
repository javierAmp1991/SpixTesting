import style from "/styles/Desktop/Misc/inputSelectCustom.module.css"
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import {useEffect, useState} from "react";

export class OptionSelectCustom {
    Value: any
    Name: string
}
export class SelectCustomProps {
    Options: OptionSelectCustom[]
    OnChange: Function
}

const initialRotate: string = `rotate(-90deg)`
const bottomRotate: string = `rotate(0deg)`

export default function InputSelectCustom({item}: { item: SelectCustomProps }) {
    let [rotate, setRotate] = useState(initialRotate)
    let [rotateArrow, setRotateArrow] = useState(true)
    let [stateClick, setStateClick] = useState(false)
    const handleClick = () => {
        setRotateArrow(stateClick)
        setStateClick(!stateClick)
    }
    const handleFocus = () => setRotateArrow(false)
    const handleBlur = () => setRotateArrow(true)
    const handleOnChange = (e) => {
        item.OnChange(e.target.value)
        handleBlur()
    }
    useEffect(() => {
        setRotate(rotateArrow ? initialRotate : bottomRotate)
    }, [rotateArrow])

    return (
        <div className={style.mainDiv}>
            <select className={style.select} onClick={handleClick} onFocus={handleFocus}
                    onBlur={handleBlur} onChange={handleOnChange}>
                {
                    item.Options.map(item =>
                        <option value={item.Value} key={item.Value}>
                            {item.Name}
                        </option>
                    )
                }

            </select>
            <div style={{transform: rotate}} className={style.arrow}>
                <Image layout={"fill"} src={GlobalConst.sourceImages.bottomArrow}/>
            </div>
        </div>
    )
}