import style from "/styles/Desktop/StadiumPage/stadiumImage.module.css"
import React, {useRef, useState} from "react";
import SVG from 'react-inlinesvg';
import {useContext} from "react";
import {
    LayoutStadiumContext,
    SelectedAreaContext,
    SelectedSubAreaContext,
    ProviderSelectedAreaProp, ProviderSelectedSubAreaProp,
} from "./stadiumLayutProvider";
import {LayoutStadium, StateArea} from "../../../dataDemo/Desktop/StadiumPage/dataStadium";

export default function StadiumImage({stateSelectedInitialTicket, displaySubAreaSelected, stateAnimation}:
                                         {
                                             stateSelectedInitialTicket: number,
                                             displaySubAreaSelected: Function,
                                             stateAnimation: boolean
                                         }) {
    const divWheelRef = useRef(null)
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

    const handleWheelEvent = (e) => {
        if (e.deltaY < 0) {
            handleClickZoomUp()
        } else {
            handleClickZoomDown()
        }
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
            <div className={`${style.principalGridOpen} ${cssStyle.animation}`}>
                <div ref={divWheelRef} onWheel={handleWheelEvent} className={cssStyle.stateTickets}>
                    <SVG className={style.mainContSvg}
                         title="React Svg"
                         onLoad={postCss}
                         src={layoutStadiumContext.UrlSvg}/>
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
        if (stateArea == StateArea.Normal) {
            document.getElementById(id).classList.add(style.normal)
        } else if (stateArea == StateArea.Critic) {
            document.getElementById(id).classList.add(style.critic)
        } else document.getElementById(id).classList.add(style.noStock)
    }

    function addOnClickEvent(id: string, subAresCode: string) {
        document.getElementById(id).onclick = () => handleClickArea(id, subAresCode)
    }

    function postCss() {
        layoutStadiumContext.AreasStadium.forEach((item) => {
                addClassToSvg(item.Id, item.StateArea)
                addOnClickEvent(item.Id, item.SubAreaStadium.Id)
                getOnMouseOVer(item.Id)
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