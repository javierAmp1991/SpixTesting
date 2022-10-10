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
    const contRef = useRef(null)
    let [widthHeight, setWidthHeight] = useState({w: 517, h: 421})
    let [viewBoxAt, setViewBoxAt] = useState({x: 0, y: 0, w: 517, h: 421})
    let [startPoints, setStartPoints] = useState({x: 0, y: 0})
    let [scalePoint, setScalePoint] = useState(1)
    let [isPanningControl, setIsPanningControl] = useState(false)
    let [zoneSelected, setZoneSelected] = useState(null)
    let [displayDropDown, setDisplayDropDown] = useState(false)
    let [stateArrow, setStateArrow] = useState(true)
    let [numbers, setNumbers] = useState([])
    let [isGrabbing, setIsGrabbin] = useState(false)
    const cssStyle = getCssStyle()
    const factorScroll: number = -0.05
    let widthTest: number = 517
    let heightTest: number = 421
    let viewBox;
    let svgSize = {w: 517, h: 421};
    let endPoint = {x: 0, y: 0};
    let scale = 1;

    const handleArrow = (e) => {
        setStateArrow(stateArrow = false)
    }

    const handleDisplayOptions = () => setDisplayDropDown(displayDropDown = !displayDropDown)
    const handleOnChangeSelect = (item: AreaItem) => {
        setZoneSelected(zoneSelected = item.Name)
        handleDisplayOptions()
        venuaAreaContext.SelectArea(item.Id)
    }
    //endregion


    //region svg test

    const handleZoomButton = (num: number) => {
        let w = viewBoxAt.w;
        let h = viewBoxAt.h;
        let mx = widthTest / 2;
        let my = heightTest / 2;
        let dw = w * Math.sign(num) * factorScroll;
        let dh = h * Math.sign(num) * factorScroll;
        let dx = dw * mx / svgSize.w;
        let dy = dh * my / svgSize.h;
        viewBox = {x: viewBoxAt.x + dx, y: viewBoxAt.y + dy, w: viewBoxAt.w - dw, h: viewBoxAt.h - dh};
        setScalePoint(scalePoint = svgSize.w / viewBox.w)
        setViewBoxAt(viewBoxAt = {x: viewBox.x, y: viewBox.y, w: viewBox.w, h: viewBox.h})
    }
    const handleOnWheel = (e) => {
        let w = viewBoxAt.w;
        let h = viewBoxAt.h;
        let mx = e.nativeEvent.offsetX;
        let my = e.nativeEvent.offsetY;
        let dw = w * Math.sign(e.deltaY) * factorScroll;
        let dh = h * Math.sign(e.deltaY) * factorScroll;
        let dx = dw * mx / widthHeight.w;
        let dy = dh * my / widthHeight.h;
        viewBox = {x: viewBoxAt.x + dx, y: viewBoxAt.y + dy, w: viewBoxAt.w - dw, h: viewBoxAt.h - dh};
        scale = svgSize.w / viewBox.w;
        setViewBoxAt(viewBoxAt = {x: viewBox.x, y: viewBox.y, w: viewBox.w, h: viewBox.h})
    }
    const handleOnMouseDown = (e) => {
        setIsPanningControl(isPanningControl = true)
        setIsGrabbin(isGrabbing = true)
        setStartPoints(startPoints = {x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY})
    }
    const handleOnMouseMove = (e) => {
        if (isPanningControl) {
            endPoint = {x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY}
            let dx = (startPoints.x - endPoint.x) / scale;
            let dy = (startPoints.y - endPoint.y) / scale;
            setViewBoxAt(viewBoxAt = {...viewBoxAt, x: dx, y: dy})
        }
    }
    const handleOnMouseUp = (e) => {
        if (isPanningControl) {
            endPoint = {x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY};
            let dx = (startPoints.x - endPoint.x) / scale;
            let dy = (startPoints.y - endPoint.y) / scale;
            setViewBoxAt(viewBoxAt = {...viewBoxAt, x: dx, y: dy})
            setIsPanningControl(isPanningControl = false)
            setIsGrabbin(isGrabbing = false)
        }
    }
    const handleOnMouseLeave = () => {
        setIsPanningControl(isPanningControl = false)
    }
    const handleReturn = () => setViewBoxAt({x: 0, y: 0, w: widthTest, h: heightTest})
    //endregion

    return (
        <>
            <div onScroll={handleArrow} className={`${style.principalGridOpen} ${cssStyle.animation}`}>
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
                    <div className={style.spaceSvg}>
                        <div ref={contRef} className={`${cssStyle.stateTickets} ${cssStyle.cursorStyle}`}>
                            <SVG className={style.touchAction}
                                 viewBox={`${viewBoxAt.x} ${viewBoxAt.y} ${viewBoxAt.w} ${viewBoxAt.h}`}
                                 width={"auto"} height={"auto"}
                                 preserveAspectRatio={"xMidYMid"}
                                /*onWheel={handleOnWheel}
                                onMouseLeave={handleOnMouseLeave}
                                onMouseMove={handleOnMouseMove}
                                onMouseDown={handleOnMouseDown}
                                onMouseUp={handleOnMouseUp}*/
                                 onLoad={postCss}
                                 src={venuaAreaContext.Area.UrlSvg}/>

                        </div>
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
                {
                    /*numberTicketWant.NumberWant > 0 &&
                    <div className={style.divZoom}>
                        <button onClick={() => handleZoomButton(-1000)} className={style.divLesMore}>
                            +
                        </button>
                        <button onClick={handleReturn} className={style.divLesMore}>
                            <Image width={18} height={18} src={GlobalConst.sourceImages.fitScaleIcon}/>
                        </button>
                        <button onClick={() => handleZoomButton(1000)} className={style.divLesMore}>
                            -
                        </button>
                    </div>*/
                }
            </div>
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
            divOptions: displayDropDown ? style.optionOpen : style.optionClose,
            cursorStyle: isGrabbing ? style.cursorGrabbing : style.cursorGrab
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

    function onMouseOverAction(id: string) {
        let newElement = document.getElementById(id)
        document.getElementById("svgMain").appendChild(newElement)

    }

    function addOnMouseOver(id: string) {
        document.getElementById(id).onmouseover = () => onMouseOverAction(id)
    }

    function postCss() {
        venuaAreaContext.Area.AreasStadium.forEach((item) => {
                addClassToSvg(item.Id, item.StateArea)
                addOnClickEvent(item.Id, item.SectionDetail.Id)
            }
        )
        for (let i = 1; i <= 58; i++) {
            addOnMouseOver(`idsvg${i}`)
        }

        for (let i = 1; i <= 58; i++) {
            addOnClickEvent(`idsvg${i}`, "subAreaStadium1")
        }
    }

    //endregion
}