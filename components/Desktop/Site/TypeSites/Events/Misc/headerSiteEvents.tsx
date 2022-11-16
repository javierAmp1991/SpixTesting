import style from "/styles/Desktop/Site/TypeSite/Bussines/Misc/headerSiteBusiness.module.css"
import utilities from "/styles/utilities.module.css";
import {useState} from "react";
import {GlobalConst, GlobalId} from "../../../../../../public/globalConst";
import SocialButtons from "../../../../Misc/SocialButtons";
import Image from "next/image";
import {HeaderSiteEventsProp, TypeActionContact} from "../../../../../../Class/Site/TypeSite/Events/events";
import PopUpContainer from "../../../../Misc/popUpContainer";
import Link from "next/link";
import {createPortal} from "react-dom";
import ContactPopUp from "../../Business/Misc/contactPopUp";

const idPortal: string = GlobalId.globalIds.idPortal
const produceText: string = "Produce: "
const defaultValue = {
    width: `100%`
}

export default function HeaderSiteEvents({item}: { item: HeaderSiteEventsProp}) {
    let [socialAndReport, setSocialAndReport] = useState(false)
    const handleSocialAndReport = () => setSocialAndReport(socialAndReport = !socialAndReport)
    const tagStyle = getTagStyle()
    const cssStyles = getCssStyles()

    return (
        <div className={style.mainDiv}>
            <div style={{width: cssStyles.width}} className={style.mainDivInfo}>
                <div className={style.separationLineUp}/>

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
                    <button onClick={handleSocialAndReport} className={style.sizeThreePoints}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.threePoints} alt={""}/>
                    </button>
                </div>

                <div className={`${utilities.clamp5} ${style.description}`}>
                    {item.Description}
                </div>

                <div className={style.produce}>
                    <span>{produceText}</span>
                    <span>{item.Produce}</span>
                </div>
                <div className={style.contSocialButton}>
                    <SocialButtons item={item.SocialButtons}/>
                </div>

                <div className={style.separationLine}/>
            </div>
            {
                socialAndReport &&
                createPortal(
                    <PopUpContainer closePopUp={handleSocialAndReport} isButtonVisible={true} isBackground={true}>
                        <ContactPopUp item={item.Contact}/>
                    </PopUpContainer>, document.getElementById(idPortal)
                )
            }
        </div>
    )

    function getTagStyle() {
         return style.tagDefaultEvent
    }
    function getCssStyles(){
        return{
            width: item.Width == null ? defaultValue.width : item.Width
        }
    }
}