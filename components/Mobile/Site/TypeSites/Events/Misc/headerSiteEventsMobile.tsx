import style from "/styles/Mobile/Site/TypeSite/Bussines/Misc/headerSiteBusiness.module.css"
import utilities from "/styles/utilities.module.css";
import {useState} from "react";
import {GlobalConst, GlobalId} from "../../../../../../public/globalConst";
import SocialButtons from "../../../../../Desktop/Misc/SocialButtons";
import Image from "next/image";
import {HeaderSiteEventsProp} from "../../../../../../Class/Site/TypeSite/Events/events";
import PopUpContainerMob from "../../../../Misc/popUpContainerMob";
import ContactPopUpMobile from "../../Business/Misc/contactPopUpMobile";
import {createPortal} from "react-dom";

const idPortal: string = GlobalId.globalIds.idPortal
const produceText: string = "Produce: "
const defaultValue = {
    width: `100%`
}

export default function HeaderSiteEventsMobile({item}: { item: HeaderSiteEventsProp }) {
    const tagStyle = getTagStyle()
    const cssStyles = getCssStyles()
    let [socialAndReport, setSocialAndReport] = useState(false)
    const handleSocialAndReport = () => setSocialAndReport(socialAndReport = !socialAndReport)


    return (
        <div className={style.mainDiv}>
            <div style={{width: cssStyles.width}} className={style.mainDivInfo}>
                <div className={style.gridNameThreePoints}>
                    <div className={style.gridTags}>
                        {
                            item.Tags.map(item =>
                                <div key={item} className={`${style.tagBase} ${tagStyle}`}>
                                    {item}
                                </div>)
                        }
                    </div>
                    <button onClick={handleSocialAndReport} className={style.sizeThreePoints}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.threePoints} alt={""}/>
                    </button>
                </div>

                <div className={style.name}>
                    {item.Name}
                </div>

                <div className={`${utilities.clamp3} ${style.description}`}>
                    {item.Description}
                </div>

                <div className={style.produce}>
                    <span>{produceText}</span>
                    <button>{item.Produce}</button>
                </div>
                <div className={style.contSocialButton}>
                    <SocialButtons item={item.SocialButtons}/>
                </div>
            </div>
            {
                socialAndReport &&
                createPortal(
                <PopUpContainerMob closePopUp={handleSocialAndReport} isBackground={true} isButtonVisible={true}>
                    <ContactPopUpMobile item={item.Contact}/>
                </PopUpContainerMob>, document.getElementById(idPortal)
                )
            }
        </div>
    )

    function getTagStyle() {
        return style.tagDefaultEvent
    }

    function getCssStyles() {
        return {
            width: item.Width == null ? defaultValue.width : item.Width
        }
    }
}