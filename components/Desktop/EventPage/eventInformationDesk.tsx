import {EventLookUp, fomrLink} from "../../../dataDemo/data";
import utilities from "/styles/utilities.module.css"
import style from "/styles/Desktop/EventPage/eventInformation.module.css"
import FormView from "../Misc/formView";
import React, {useState} from "react";
import {GlobalConst} from "../../../public/globalConst";
import LayoutPurpleContainer from "../Layouts/layoutPurpleContainer";
import Image from "next/image";
import ButtonBlue from "../Misc/buttonBlue";

const textButton: string = "Comprar Entradas"

export default function EventInformationDesk({
                                                 eventInformation,
                                                 formList
                                             }: { eventInformation: EventLookUp, formList: fomrLink[] }) {
    let [selectedShow, setSelectedShow] = useState(true)
    let [targetImage, setTargetImage] = useState("")
    const handleVideo = () => {
        setSelectedShow(selectedShow = true)
    }
    const handleTargetImage = (linkImage) => {
        setSelectedShow(selectedShow = false)
        setTargetImage(targetImage = linkImage)
    }


    const cssStyle = getCssStyle()
    return (
        <div>
            <div>
                <div className={style.gridImageSelection}>
                    <div className={style.gridSelectionZone}>
                        {
                            eventInformation.ListImages.map((item, index) =>
                                index == 0 ?
                                    <div onClick={handleVideo} className={`${style.containerImageSelection}`}>
                                        <div className={style.sizeImageSelection}>
                                            <Image layout={"fill"} objectFit={"cover"} src={item} alt=""/>
                                        </div>
                                        <div className={style.playIconProperties}>
                                            <Image layout={"fill"} objectFit={"cover"}
                                                   src={GlobalConst.sourceImages.playIcon} alt=""/>
                                        </div>
                                    </div>
                                    :
                                    <div onClick={() => handleTargetImage(item)}
                                         className={`${style.containerImageSelection} relative`}>
                                        <div className={style.sizeImageSelection}>
                                            <Image layout={"fill"} objectFit={"cover"} src={item} alt=""/>
                                        </div>
                                    </div>
                            )
                        }
                    </div>
                    <div>
                        {
                            selectedShow ?
                                <div className={style.containerShowProp}>
                                    <video controls className={style.videoShowProperties} src={eventInformation.Video}/>
                                </div>
                                :
                                <div className={style.containerShowProp}>
                                    <div className={style.imageShowProperties}>
                                        <Image layout={"fill"} objectFit={"cover"} src={targetImage} alt=""/>
                                    </div>
                                </div>
                        }
                    </div>
                </div>

                <div className={`${utilities.fontPrimaryText} ${style.paddingDescription}`}>
                    {eventInformation.Description}
                </div>

                <div className={style.gridAtributes}>
                    <div className={utilities.fontPrimaryText}>
                        Atributos:
                    </div>
                    {
                        eventInformation.Tags.map((item, index) =>
                            index != eventInformation.Tags.length - 1 ?
                                <a className={utilities.fontSecundaryText} key={index}>{item},</a>
                                :
                                <a className={utilities.fontSecundaryText} key={index}>{item}.</a>
                        )
                    }
                </div>

            </div>

            <div className="px-0.5">
                {
                    formList.length > 0 &&
                    <LayoutPurpleContainer isDarkMode={false}>
                        <div className={`${cssStyle.gridForm} py-4`}>
                            {
                                formList.map((item, index) =>
                                    <div className={style.maxWidthFormDesk} key={index}>
                                        <FormView item={item}/>
                                    </div>
                                )
                            }

                        </div>
                    </LayoutPurpleContainer>
                }
            </div>
        </div>
    )

    function getCssStyle() {
        return {
            gridForm: formList.length >= 3 ? style.gridForm3 : style.gridForm,
            gridwidth: formList.length >= 3 ? style.containerFomr3 : style.containerFomr2
        }
    }
}