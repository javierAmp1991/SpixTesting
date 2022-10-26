import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import style from "/styles/Desktop/SitePage/carrouselCard.module.css"

export default function CarrouselCard() {
    return (
        <div className={style.mainDiv}>
            <div>
                Titulo
            </div>
            <div>
                <div className={style.sizeArrow}>
                    <Image src={GlobalConst.sourceImages.leftArrow}/>
                </div>
                <div>
                    <div>

                    </div>
                </div>
                <div className={style.sizeArrow}>
                    <Image src={GlobalConst.sourceImages.rightArrow}/>

                </div>
            </div>
        </div>
    )
}