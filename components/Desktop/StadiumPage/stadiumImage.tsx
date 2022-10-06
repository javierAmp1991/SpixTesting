import style from "/styles/Desktop/StadiumPage/stadiumImage.module.css"
import React, {useRef, useState} from "react";
import SVG from 'react-inlinesvg';
import {useContext} from "react";
import {
    LayoutStadiumContext, VenueDataContext,
    SelectedAreaContext, SelectedSubAreaContext,
    ProviderSelectedAreaProp, ProviderSelectedSubAreaProp, ZonesContext
} from "./stadiumLayutProvider";
import {AreaItem, AreaLayout, StateArea, Venue, Zone} from "../../../dataDemo/Desktop/StadiumPage/dataStadium";
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import utilities from "/styles/utilities.module.css";

const noSelectedText: string = "Selecciona un area"
const zonesTitle: string = "Zonas"

export default function StadiumImage({stateSelectedInitialTicket, displaySubAreaSelected, stateAnimation}:
                                         {
                                             stateSelectedInitialTicket: number,
                                             displaySubAreaSelected: Function,
                                             stateAnimation: boolean
                                         }) {
    const divWheelRef = useRef(null)
    const containerSvg = useRef(null)
    const venueInformationContext: Venue = useContext(VenueDataContext)
    const layoutStadiumContext: AreaLayout = useContext(LayoutStadiumContext)
    const selectedAreaContext: ProviderSelectedAreaProp = useContext(SelectedAreaContext)
    const subAreaStadiumContext: ProviderSelectedSubAreaProp = useContext(SelectedSubAreaContext)
    const listZonesContext: Zone[] = useContext(ZonesContext)
    const handleClickArea = (idArea: string, idSubArea: string) => {
        selectedAreaContext.SelectArea(idArea)
        subAreaStadiumContext.SelectSubArea(idSubArea)
        displaySubAreaSelected()
    }

    let [scaleControl, setScaleControl] = useState(1)
    const scaleAdd: number = 0.5
    const minScale: number = 1
    const maxScale: number = 4

    let [positionCursorX, setPositionCursorX] = useState()
    let [positionCursorY, setPositionCursorY] = useState()
    let [areaSelected, setAreaSelected] = useState(null)
    let [displayOptions, setDisplayOptions] = useState(false)
    const handleDisplayOptions = () => setDisplayOptions(displayOptions = !displayOptions)

    const handleMoveMouse = (e) => {
        setPositionCursorX(positionCursorX = e.pageX)
        setPositionCursorY(positionCursorY = e.pageY)
    }
    const handleWheelEvent = (e) => {
        /*if (e.deltaY < 0) {
            divWheelRef.current.style.transformOrigin = `${positionCursorX} ${positionCursorY}`
            handleClickZoomUp()
        } else {
            divWheelRef.current.style.transformOrigin = `${positionCursorX} ${positionCursorY}`
            handleClickZoomDown()
        }*/
    }
    const handleClickZoomUp = () => {
        let newScaleControl = scaleControl + scaleAdd
        if (newScaleControl > maxScale) {
            setScaleControl(scaleControl = maxScale)
            divWheelRef.current.style.transform = `scale(${maxScale})`;
        } else {
            setScaleControl(scaleControl = newScaleControl)
            divWheelRef.current.style.transform = `scale(${scaleControl})`;
        }

    }
    const handleClickZoomDown = () => {
        let newScaleControl = scaleControl - scaleAdd
        if (newScaleControl < minScale) {
            setScaleControl(scaleControl = minScale)
            divWheelRef.current.style.transform = `scale(${minScale})`;
        } else {
            setScaleControl(scaleControl = newScaleControl)
            divWheelRef.current.style.transform = `scale(${scaleControl})`;
        }
    }
    const handleOnChangeSelect = (item: AreaItem) => {
        setAreaSelected(areaSelected = item.Name)
        handleDisplayOptions()
    }

    let [stateArrow, setStateArrow] = useState(true)
    const handleScrollArrow = (e) => {
        if (e.target.scrollTop == 0) setStateArrow(stateArrow = true)
        else setStateArrow(stateArrow = false)
    }

    let [stateLeft, setStateLeft] = useState(500)
    let [stateright, setStateRight] = useState(500)

    const handleWheel = (e) => {
        if (e.deltaY > 0) {
            setStateLeft(stateLeft += 100)
            setStateRight(stateLeft += 100)
        }
        else{
            setStateLeft(stateLeft -= 100)
            setStateRight(stateLeft -= 100)
        }
    }

    const cssStyle = getCssStyle()

    return (
        <>
            <div onScroll={handleScrollArrow} ref={containerSvg}
                 className={`${style.principalGridOpen} ${cssStyle.animation}`}>
                <div className={style.mainDivSelectInput}>
                    <button className={style.selectCss} onClick={handleDisplayOptions}>
                        <div className={style.colorArea}>
                            {
                                areaSelected == null ?
                                    noSelectedText : areaSelected

                            }

                        </div>
                        <div className={style.sizeDownArrow}>
                            <Image layout={"fill"} src={GlobalConst.sourceImages.downArrow} alt={""}/>
                        </div>
                    </button>
                    <div className={cssStyle.divOptions}>
                        {
                            venueInformationContext.ListAreaItem.map((item) =>
                                <span className={style.styleOptions} onClick={() => handleOnChangeSelect(item)}
                                      key={item.Name}>
                                {item.Name}
                            </span>)
                        }
                    </div>
                </div>

                <div className={cssStyle.animation}>
                    <div ref={divWheelRef} onWheel={handleWheel}
                         className={cssStyle.stateTickets}>
                        <SVG className={style.mainContSvg}
                             onLoad={postCss}
                             src={layoutStadiumContext.UrlSvg}/>

                    </div>
                </div>

                <div className={style.mainDivZones}>
                    <div className={utilities.fontTitleDesktop}>
                        {zonesTitle}
                    </div>
                    <div className={style.gridZones}>
                        {
                            listZonesContext.map(item =>

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
                        <Image layout={"fill"} src={GlobalConst.sourceImages.leftArrowRed}/>
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

    function getCssStyle() {
        return {
            stateTickets: stateSelectedInitialTicket > 0 ? style.svgNormal : style.svgReduce,
            animation: stateAnimation ? style.divTransition : style.divTransition2,
            divOptions: displayOptions ? style.optionOpen : style.optionClose
        }
    }

    function addClassToSvg(id: string, stateArea: StateArea) {
        let nodes = document.getElementsByClassName("areaSvgStadium")
        for (let i = 0; i < nodes.length; i++) {
            nodes[i].classList.add(style.svgClass)
        }
        /*if (stateArea == StateArea.Normal) {
            let nodes = document.getElementsByClassName("topArea")
            for (let i = 0; i < nodes.length; i++){
                nodes[i].classList.add(style.normal)
            }
            /!*document.getElementById(id).classList.add(style.normal)*!/

        } else if (stateArea == StateArea.Critic) {
            let nodes = document.getElementsByClassName("rightArea")
            for (let i = 0; i < nodes.length; i++){
                nodes[i].classList.add(style.critic)
            }
            /!*document.getElementById(id).classList.add(style.critic)*!/
        }
        else {
            let nodes = document.getElementsByClassName("leftArea")
            for (let i = 0; i < nodes.length; i++){
                nodes[i].classList.add(style.blue)
            }
            /!*document.getElementById(id).classList.add(style.noStock)*!/
        }*/
    }

    function addOnClickEvent(id: string, subAresCode: string) {
        document.getElementById(id).onclick = () => handleClickArea(id, subAresCode)
    }

    function postCss() {
        layoutStadiumContext.AreasStadium.forEach((item) => {
                addClassToSvg(item.Id, item.StateArea)
                addOnClickEvent(item.Id, item.SubAreaStadium.Id)
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
}