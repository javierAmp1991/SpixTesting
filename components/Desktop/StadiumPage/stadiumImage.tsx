import style from "/styles/Desktop/StadiumPage/stadiumImage.module.css"
import React, {useRef, useEffect, useState} from "react";
import SVG from 'react-inlinesvg';
import {useContext} from "react";
import {
    LayoutStadiumContext,
    SelectedAreaContext,
    SelectedSubAreaContext,
    ProviderSelectedAreaProp, ProviderSelectedSubAreaProp,
} from "./stadiumLayutProvider";
import {LayoutStadium, StateArea} from "../../../dataDemo/Desktop/StadiumPage/dataStadium";
import {ReactSVGPanZoom} from 'react-svg-pan-zoom';
import {UncontrolledReactSVGPanZoom} from 'react-svg-pan-zoom';
import {PrincipalFeaturedSearch} from "../../../dataDemo/EventView/featureView";
import item = PrincipalFeaturedSearch.item;

const listIds: string[] = ["idsvg1", "idsvg2", "idsvg3", "idsvg4", "idsvg5", "idsvg6", "idsvg7", "idsvg8", "idsvg9", "idsvg10", "idsvg"]

export default function StadiumImage({stateSelectedInitialTicket, displaySubAreaSelected, stateAnimation}:
                                         {
                                             stateSelectedInitialTicket: number,
                                             displaySubAreaSelected: Function,
                                             stateAnimation: boolean
                                         }) {
    const divWheelRef = useRef(null)
    const containerSvg = useRef(null)
    const layoutStadiumContext: LayoutStadium = useContext(LayoutStadiumContext)
    const selectedAreaContext: ProviderSelectedAreaProp = useContext(SelectedAreaContext)
    const subAreaStadiumContext: ProviderSelectedSubAreaProp = useContext(SelectedSubAreaContext)
    const cssStyle = getCssStyle()
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

    return (
        <>
            <div ref={containerSvg} className={`${style.principalGridOpen} ${cssStyle.animation}`}>
                <div className={`${style.principalGridOpen} ${cssStyle.animation}`}>
                    <div ref={divWheelRef} onMouseMove={handleMoveMouse} onWheel={handleWheelEvent}
                         className={cssStyle.stateTickets}>
                        <SVG className={style.mainContSvg}
                             onLoad={postCss}
                             src={layoutStadiumContext.UrlSvg}/>

                    </div>
                </div>
            </div>
            {
                stateSelectedInitialTicket > 0 &&
                <div className={style.divZoom}>
                    <button onClick={handleClickZoomUp} className={style.divLesMore}>
                        +
                    </button>
                    <button onClick={handleClickZoomDown} className={style.divLesMore}>
                        -
                    </button>
                </div>
            }
        </>
    )

    function getCssStyle() {
        return {
            stateTickets: stateSelectedInitialTicket > 0 ? style.svgNormal : style.svgReduce,
            animation: stateAnimation ? style.divTransition : style.divTransition2
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