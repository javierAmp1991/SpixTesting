import style from "/styles/Desktop/Site/TypeSite/Bussines/Misc/headerSiteBusiness.module.css"
import utilities from "/styles/utilities.module.css";
import {useState} from "react";
import PopUpContainer from "../../../../Misc/popUpContainer";
import MapPopUp from "../../../../Misc/mapPopUp";
import {createPortal} from "react-dom";
import {GlobalConst, GlobalId} from "../../../../../../public/globalConst";
import SocialButtons from "../../../../Misc/SocialButtons";
import Image from "next/image";
import {HeaderSiteEventsProp} from "../../../../../../Class/Site/TypeSite/Events/events";

const idPortal: string = GlobalId.globalIds.idPortal
const produceText: string = "Direccion: "
const defaultValue = {
    width: `100%`
}

export default function HeaderSiteEvents({item}: { item: HeaderSiteEventsProp}) {
    let [popUp, setPopUp] = useState(false)
    const handlePopUp = () => setPopUp(popUp = !popUp)
    const tagStyle = getTagStyle()
    const cssStyles = getCssStyles()

    return (
        <div className={style.mainDiv}>
            <div style={{width: cssStyles.width}} className={style.mainDivInfo}>
                <div className={style.gridTags}>
                    {
                        item.Tags.map(item =>
                            <div key={item} className={`${style.tagBase} ${tagStyle}`}>
                                {item}
                            </div>)
                    }
                </div>
                <div className={style.gridNameThreePoints}>
                    <div className={style.name}>
                        {item.Name}
                    </div>
                    <button className={style.sizeThreePoints}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.threePoints}/>
                    </button>
                </div>

                <div className={`${utilities.clamp5} ${style.description}`}>
                    {item.Description}
                </div>

                <div className={style.produce}>
                    <span>{produceText}</span>
                    <button onClick={handlePopUp} className={utilities.styleLink}>{item.Produce}</button>
                </div>
                <div className={style.contSocialButton}>
                    <SocialButtons item={item.SocialButtons}/>
                </div>

                <div className={style.separationLine}/>

            </div>
        </div>
    )

    function getTagStyle() {
         return style.tagDefault
    }
    function getCssStyles(){
        return{
            width: item.Width == null ? defaultValue.width : item.Width
        }
    }
}