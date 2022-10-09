import style from "/styles/Mobile/StadiumPage/stadiumImage.module.css"
import SVG from 'react-inlinesvg';
import React, {useContext, useState} from "react";
import {
    VenueDataContext, SelectedSectionContext, SelectedZoneContext,
    VenueAreaContext, ProviderVenueAreaProp, ProviderNumberWantProp,
    NumberTicketWant, ProviderSelectedSectionProp, ProviderSelectedSubAreaProp
} from "../../Desktop/StadiumPage/stadiumLayutProvider";

import {AreaItem, StateArea, Venue} from "../../../dataDemo/Desktop/StadiumPage/dataStadium";
import utilities from "/styles/utilities.module.css";
import {GlobalConst} from "../../../public/globalConst";
import Image from "next/image";

const noSelectedText: string = "Selecciona un area"
const zonesTitle: string = "Zonas"

export default function StadiumImageMobile({displaySubAreaSelected, stateAnimation}:
                                               {
                                                   displaySubAreaSelected: Function, stateAnimation: boolean
                                               }) {
    const venuaAreaContext: ProviderVenueAreaProp = useContext(VenueAreaContext)
    const venueAreasInfoContext: Venue = useContext(VenueDataContext)
    const selectedAreaContext: ProviderSelectedSectionProp = useContext(SelectedSectionContext)
    const subAreaStadiumContext: ProviderSelectedSubAreaProp = useContext(SelectedZoneContext)
    const numberTicketWant: ProviderNumberWantProp = useContext(NumberTicketWant)

    const cssStyle = getCssStyle()
    const handleClickArea = (idArea: string, idSubArea: string) => {
        selectedAreaContext.SelectSection(idArea)
        subAreaStadiumContext.SelectSubArea(idSubArea)
        displaySubAreaSelected()
    }

    let [zoneSelected, setZoneSelected] = useState(null)
    let [displayOptions, setDisplayOptions] = useState(false)
    const handleDisplayOptions = () => setDisplayOptions(displayOptions = !displayOptions)
    const handleOnChangeSelect = (item: AreaItem) => {
        setZoneSelected(zoneSelected = item.Name)
        handleDisplayOptions()
        venuaAreaContext.SelectArea(item.Id)
    }

    return (
        <div className={`${style.principalGridOpen} ${cssStyle.animation}`}>
            <div className={style.mainDivSelectInput}>
                <button className={style.selectCss} onClick={handleDisplayOptions}>
                    <div className={style.colorArea}>
                        {
                            zoneSelected == null ?
                                noSelectedText : zoneSelected
                        }

                    </div>
                    <div className={style.sizeDownArrow}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.downArrow} alt={""}/>
                    </div>
                </button>
                <div className={displayOptions ? style.optionOpen : style.optionClose}>
                    {
                        venueAreasInfoContext.ListAreaItem.map((item) =>
                            <button className={style.styleOptions} onClick={() => handleOnChangeSelect(item)}
                                    key={item.Name}>
                                {item.Name}
                            </button>)
                    }
                </div>
            </div>
            <div className={`${cssStyle.animation}`}>
                <div className={cssStyle.stateTickets}>
                    <SVG className={style.mainContSvg}
                         onLoad={postCss}
                         src={venuaAreaContext.Area.UrlSvg}/>
                </div>
            </div>
            <div className={style.mainDivZones}>
                <div className={utilities.fontTitleDesktop}>
                    {zonesTitle}
                </div>
                <div className={style.gridZones}>
                    {
                        venuaAreaContext.Area.GroupSections.map(item =>
                            <div key={item.Id} className={style.gridColorZone}>
                                <div className={style.divColor} style={{background: item.Color}}/>
                                <div>
                                    {item.Name}
                                </div>
                            </div>
                        )

                    }
                </div>
            </div>
        </div>
    )

    function getCssStyle() {
        return {
            stateTickets: numberTicketWant.NumberWant > 0 ? style.svgNormal : style.svgReduce,
            animation: stateAnimation ? style.divTransition : style.divTransition2,
        }
    }

    function addClassToSvg(id: string, stateArea: StateArea) {
        let nodes = document.getElementsByClassName("areaSvgStadium")
        for (let i = 0; i < nodes.length; i++) {
            nodes[i].classList.add(style.svgClass)
        }
    }

    function addOnClickEvent(id: string, subAresCode: string) {
        document.getElementById(id).onclick = () => handleClickArea(id, subAresCode)
    }

    function postCss() {
        venuaAreaContext.Area.AreasStadium.forEach((item) => {
                addClassToSvg(item.Id, item.StateArea)
                addOnClickEvent(item.Id, item.SectionDetail.Id)
                /*getOnMouseOVer(item.Id)*/
            }
        )
    }


    function getOnMouseOVer(id: string) {
        document.getElementById(id).onmouseover = () => addHover(id)
    }

    function addHover(id: string) {
        let newDiv = document.getElementById(id)
        document.getElementById("idSvgStadium").appendChild(newDiv)
    }
}