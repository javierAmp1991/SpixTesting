import style from "/styles/Desktop/Layouts/layoutSquare.module.css"
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";

export class LayoutSquareProp {
    HeightExact: number
    HeightRelative: string
}

export default function LayoutSquare({children, LayoutProp}: { children: JSX.Element, LayoutProp: LayoutSquareProp}) {
    const cssStyle = getCssStyle()

    function getCssStyle() {
        return {
            height: LayoutProp.HeightExact == null ? LayoutProp.HeightRelative : LayoutProp.HeightExact,
        }
    }
    return (
        <div className={style.backGroundBlue}>
            <div style={{height: cssStyle.height}} className={style.mainDiv}>
                <div className={style.contLogo}>
                    <div className={style.sizeLogo}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.spixBlue} alt={""}/>
                    </div>
                </div>
                <div className={style.underDiv}>
                    {children}
                </div>
            </div>
        </div>
    )
}