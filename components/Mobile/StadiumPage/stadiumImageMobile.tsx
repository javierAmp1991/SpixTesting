import style from "/styles/Mobile/StadiumPage/stadiumImage.module.css"
import SVG from 'react-inlinesvg';
import React, {useContext, useState} from "react";
import {
    LayoutStadiumContext, SelectedAreaContext,
    SelectedSubAreaContext, VenueDataContextMobile,
    ProviderSelectedAreaProp, ProviderSelectedSubAreaProp, ListZonesContext
} from "./stadiumLayoutProviderMobile";
import {AreaItem, AreaLayout, StateArea, Venue, Zone} from "../../../dataDemo/Desktop/StadiumPage/dataStadium";
import utilities from "/styles/utilities.module.css";
const noSelectedText: string = "Selecciona un area"
const zonesTitle: string = "Zonas"

export default function StadiumImageMobile({stateSelectedInitialTicket, displaySubAreaSelected, stateAnimation}:
                                               {
                                                   stateSelectedInitialTicket: number,
                                                   displaySubAreaSelected: Function,
                                                   stateAnimation: boolean
                                               }) {
    const layoutStadiumContext: AreaLayout = useContext(LayoutStadiumContext)
    const selectedAreaContext: ProviderSelectedAreaProp = useContext(SelectedAreaContext)
    const subAreaStadiumContext: ProviderSelectedSubAreaProp = useContext(SelectedSubAreaContext)
    const listZonesContext: Zone[] = useContext(ListZonesContext)
    const venueInformationContext: Venue = useContext(VenueDataContextMobile)
    const cssStyle = getCssStyle()
    const handleClickArea = (idArea: string, idSubArea: string) => {
        selectedAreaContext.SelectArea(idArea)
        subAreaStadiumContext.SelectSubArea(idSubArea)
        displaySubAreaSelected()
    }

    let [areaSelected, setAreaSelected] = useState(null)
    let [displayOptions, setDisplayOptions] = useState(true)
    const handleDisplayOptions = () => setDisplayOptions(displayOptions = !displayOptions)
    const handleOnChangeSelect = (item: AreaItem) => {
        setAreaSelected(areaSelected = item.Name)
        handleDisplayOptions()
    }

    return (
        <div className={`${style.principalGridOpen} ${cssStyle.animation}`}>
            {/*<div className={style.mainDivSelectInput}>
                <button className={style.selectCss} onBlur={handleDisplayOptions} onClick={handleDisplayOptions}>
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
                <div className={displayOptions? style.optionOpen: style.optionClose }>
                    {
                        venueInformationContext.ListAreaItem.map((item) =>
                            <button className={style.styleOptions} onClick={()=>handleOnChangeSelect(item)} key={item.Name}>
                                {item.Name}
                            </button>)
                    }
                </div>
            </div>*/}
            <div className={`${cssStyle.animation}`}>
                <div className={cssStyle.stateTickets}>
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
            stateTickets: stateSelectedInitialTicket > 0 ? style.svgNormal : style.svgReduce,
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
        layoutStadiumContext.AreasStadium.forEach((item) => {
                addClassToSvg(item.Id, item.StateArea)
                addOnClickEvent(item.Id, item.SubAreaStadium.Id)
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