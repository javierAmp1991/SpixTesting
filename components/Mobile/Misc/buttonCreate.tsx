import style from "/styles/Desktop/Misc/buttonCreate.module.css"
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";

export class ButtonCreateProps {
    Text: string
    OnCLick: Function
}

export default function ButtonCreate({item}: { item: ButtonCreateProps }) {
    const handleOnCLick = () => item.OnCLick()
    return (
        <button className={style.mainDiv} onClick={handleOnCLick}>
            <div className={style.text}>
                {item.Text}
            </div>
            <div className={style.sizeIcon}>
                <Image layout={"fill"} src={GlobalConst.sourceImages.addIconBlue}/>
            </div>
        </button>
    )
}