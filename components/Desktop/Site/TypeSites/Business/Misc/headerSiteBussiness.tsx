import style from "/styles/Desktop/Site/TypeSite/Bussines/Misc/headerSiteBusiness.module.css"
import utilities from "/styles/utilities.module.css";
import {HeaderSiteBusinessProp, TypeSiteBusiness} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useState} from "react";
import PopUpContainer from "../../../../Misc/popUpContainer";
import MapPopUp from "../../../../Misc/mapPopUp";
import {createPortal} from "react-dom";
import {GlobalConst, GlobalId} from "../../../../../../public/globalConst";
import SocialButtons from "../../../../Misc/SocialButtons";
import Image from "next/image";

const idPortal: string = GlobalId.globalIds.idPortal
const directionText: string = "Direccion: "
const defaultValue = {
    width: `100%`
}

export default function HeaderSiteBussiness({item}: { item: HeaderSiteBusinessProp }) {
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

                <div>
                    <span>{directionText}</span>
                    <button onClick={handlePopUp} className={utilities.styleLink}>{item.Venue.Venue}</button>
                </div>
                <div className={style.contSocialButton}>
                    <SocialButtons item={item.SocialButtons}/>
                </div>

                <div className={style.separationLine}/>

            </div>
            {
                popUp &&
                createPortal(
                    <PopUpContainer closePopUp={handlePopUp} isButtonVisible={true} isBackground={true}>
                        <MapPopUp item={item.Venue}/>
                    </PopUpContainer>, document.getElementById(idPortal)
                )
            }
        </div>
    )

    function getTagStyle() {
        if (item.TypeSite == TypeSiteBusiness.Restaurant) return style.tagRestaurant
        else if (item.TypeSite == TypeSiteBusiness.BeautyAndHealth) return style.tagBeautyAndHealth
        else return style.tagDefault
    }
    function getCssStyles(){
        return{
            width: item.Width == null ? defaultValue.width : item.Width
        }
    }
}