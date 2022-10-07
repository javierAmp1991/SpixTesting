import style from "/styles/Desktop/StadiumPage/stadiumImage.module.css"
import React, {useRef, useState} from "react";
import SVG from 'react-inlinesvg';
import {useContext} from "react";
import {
    VenueDataContext, SelectedSectionContext, SelectedZoneContext,
    VenueAreaContext, ProviderVenueAreaProp, ProviderNumberWantProp,
    NumberTicketWant, ProviderSelectedSectionProp, ProviderSelectedSubAreaProp
} from "./stadiumLayutProvider";
import {AreaItem, StateArea, Venue} from "../../../dataDemo/Desktop/StadiumPage/dataStadium";
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import utilities from "/styles/utilities.module.css";

const noSelectedText: string = "Selecciona un area"
const zonesTitle: string = "Zonas"

export default function StadiumImage({displaySubAreaSelected, stateAnimation}:
                                         { displaySubAreaSelected: Function, stateAnimation: boolean}) {
    //region Provider
    const venuaAreaContext: ProviderVenueAreaProp = useContext(VenueAreaContext)
    const venueAreasInfoContext: Venue = useContext(VenueDataContext)
    const selectedAreaContext: ProviderSelectedSectionProp = useContext(SelectedSectionContext)
    const subAreaStadiumContext: ProviderSelectedSubAreaProp = useContext(SelectedZoneContext)
    const numberTicketWant: ProviderNumberWantProp = useContext(NumberTicketWant)
    //endregion

    //region hooks
    const divWheelRef = useRef(null)
    const containerSvg = useRef(null)

    let [zoneSelected, setZoneSelected] = useState(null)
    let [displayDropDown, setDisplayDropDown] = useState(false)

    const handleDisplayOptions = () => setDisplayDropDown(displayDropDown = !displayDropDown)
    const handleOnChangeSelect = (item: AreaItem) => {
        setZoneSelected(zoneSelected = item.Name)
        handleDisplayOptions()
        venuaAreaContext.SelectArea(item.Id)
    }

    let [stateArrow, setStateArrow] = useState(true)
    const handleScrollArrow = (e) => {
        if (e.target.scrollTop == 0) setStateArrow(stateArrow = true)
        else setStateArrow(stateArrow = false)
    }
    //endregion

    const cssStyle = getCssStyle()

    return (
        <>
            <div onScroll={handleScrollArrow} ref={containerSvg}
                 className={`${style.principalGridOpen} ${cssStyle.animation}`}>
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
                    <div className={cssStyle.divOptions}>
                        {
                            venueAreasInfoContext.ListAreaItem.map((item) =>
                                <span className={style.styleOptions} onClick={() => handleOnChangeSelect(item)}
                                      key={item.Name}>
                                {item.Name}
                            </span>)
                        }
                    </div>
                </div>

                <div className={cssStyle.animation}>
                    <div ref={divWheelRef}
                         className={cssStyle.stateTickets}>
                        <SVG className={style.mainContSvg}
                             onLoad={postCss}
                             src={venuaAreaContext.Area.UrlSvg}/>

                    </div>
                </div>

                <div className={style.mainDivZones}>
                    <div className={style.titleZone}>
                        {zonesTitle}
                    </div>
                    <div className={style.gridZones}>
                        {
                            venuaAreaContext.Area.GroupSections.map(item =>
                                <div key={item.Id} className={style.gridColorZone}>
                                    <div className={style.divColor} style={{background: item.Color}}/>
                                    <div className={utilities.clamp1}>
                                        {item.Name}
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
                {
                    stateArrow &&
                    <div className={style.sizeArrow}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.leftArrowRed} alt={""}/>
                    </div>
                }
            </div>
            {/*{
                stateSelectedInitialTicket > 0 &&
                <div className={style.divZoom}>
                    <button onClick={handleClickZoomUp} className={style.divLesMore}>
                        +
                    </button>
                    <button onClick={handleClickZoomDown} className={style.divLesMore}>
                        -
                    </button>
                </div>
            }*/}
        </>
    )

    //region functions
    function handleClickArea(idArea: string, idSubArea: string) {
        selectedAreaContext.SelectSection(idArea)
        subAreaStadiumContext.SelectSubArea(idSubArea)
        displaySubAreaSelected()
    }

    function getCssStyle() {
        return {
            stateTickets: numberTicketWant.NumberWant > 0 ? style.svgNormal : style.svgReduce,
            animation: stateAnimation ? style.divTransition : style.divTransition2,
            divOptions: displayDropDown ? style.optionOpen : style.optionClose
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
        /*for (let i = 1; i <= 22; i++){
            addOnClickEvent(`idsvg${i}`, "subAreaStadium1")
        }*/
    }

    function getOnMouseOVer(id: string) {
        document.getElementById(id).onmouseover = () => addHover(id)
    }

    function addHover(id: string) {
        let newDiv = document.getElementById(id)
        document.getElementById("idSvgStadium").appendChild(newDiv)
    }

    //endregion
}