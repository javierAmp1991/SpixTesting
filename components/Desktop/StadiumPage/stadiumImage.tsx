import style from "/styles/Desktop/StadiumPage/stadiumImage.module.css"
import React, {useEffect, useRef, useState} from "react";
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
                                         { displaySubAreaSelected: Function, stateAnimation: boolean }) {
    //region Provider
    const venuaAreaContext: ProviderVenueAreaProp = useContext(VenueAreaContext)
    const venueAreasInfoContext: Venue = useContext(VenueDataContext)
    const selectedAreaContext: ProviderSelectedSectionProp = useContext(SelectedSectionContext)
    const subAreaStadiumContext: ProviderSelectedSubAreaProp = useContext(SelectedZoneContext)
    const numberTicketWant: ProviderNumberWantProp = useContext(NumberTicketWant)
    //endregion

    //region hooks
    const svgImageRef = useRef(null)
    const svgContainerRef = useRef(null)

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
        if (e.target.scrollTop >= 0) setStateArrow(stateArrow = false)
    }

    let [numbers, setNumbers] = useState([])
    //endregion

    const contRef = useRef(null)
    const cssStyle = getCssStyle()

    //region svg test

    let svgImage;
    let svgContainer;
    let viewBox;

    let [viewBoxAt, setViewBoxAt] = useState({x: 0, y: 0, w: 500, h: 500})
    let [offset, setOffset] = useState({x: 0, y: 0})

    /*    useEffect(() => {
            svgImage = document.getElementById("svgImage");
            svgContainer = document.getElementById("svgContainer");
            viewBox = {x: 0, y: 0, w: 500, h: 500};
            setViewBoxAt(viewBoxAt = {x: 0, y: 0, w: 500, h: 500})
            /!*svgImage.setAttribute('viewBox', `${viewBox.x} ${viewBox.y} ${viewBox.w} ${viewBox.h}`);*!/
        })*/

    /*    const svgImage = document.getElementById("svgImage");
        const svgContainer = document.getElementById("svgContainer");*/


    const svgSize = {w: 500, h: 500};
    let scale = 1;
    viewBox = {x: 0, y: 0, w: 500, h: 500};

    const handleOnMouseMove = (e) => {
        setViewBoxAt(viewBoxAt = {...viewBoxAt, x: e.clientX/-10, y: e.clientY/-10})
    }

    const handleOnWheel = (e) => {
        let w = viewBox.w;
        let h = viewBox.h;
        let mx = e.clientX;
        let my = e.clientY;
        let dw = w * Math.sign(e.deltaY) * 0.05;
        let dh = h * Math.sign(e.deltaY) * 0.05;
        let dx = dw * mx / svgSize.w;
        let dy = dh * my / svgSize.h;
        viewBox = {x: viewBox.x + dx, y: viewBox.y + dy, w: viewBox.w - dw, h: viewBox.h - dh};
        scale = svgSize.w / viewBox.w;
        let zoomValue = 1
        setOffset(offset = {x: mx, y: my})
        setViewBoxAt(viewBoxAt = {x: viewBox.x, y: viewBox.y, w: viewBox.w, h: viewBox.h})
    }
    //endregion

    return (
        <>
            <div className={`${style.principalGridOpen} ${cssStyle.animation}`}>
                <div>{offset.x} {offset.y}</div>
                <div className={style.mainDivSelectInput}>
                    <div>
                        {
                            numbers.map(item =>
                                <span key={`${item}`}>---{item}---</span>)
                        }
                    </div>
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
                    <div id={"svgContainer"} className={cssStyle.stateTickets} onMouseMove={handleOnMouseMove}>
                        <SVG ref={contRef} height="500" width="500" onWheel={handleOnWheel}
                             viewBox={`${viewBoxAt.x} ${viewBoxAt.y} ${viewBoxAt.w} ${viewBoxAt.h}`}
                             preserveAspectRatio={`xminYmin meet`} className={style.mainContSvg}
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
            }
        )
        /*for (let i = 1; i <= 22; i++){
            addOnClickEvent(`idsvg${i}`, "subAreaStadium1")
        }*/
    }

    //endregion
}