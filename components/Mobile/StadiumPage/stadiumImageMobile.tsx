import style from "/styles/Mobile/StadiumPage/stadiumImage.module.css"
import SVG from 'react-inlinesvg';
import {useContext} from "react";
import {
    LayoutStadiumContext,
    SelectedAreaContext,
    SelectedSubAreaContext,
    ProviderSelectedAreaProp, ProviderSelectedSubAreaProp,
} from "./stadiumLayoutProviderMobile";
import {LayoutStadium, StateArea} from "../../../dataDemo/Desktop/StadiumPage/dataStadium";

export default function StadiumImageMobile({stateSelectedInitialTicket, displaySubAreaSelected, stateAnimation}:
                                               {
                                                   stateSelectedInitialTicket: number,
                                                   displaySubAreaSelected: Function,
                                                   stateAnimation: boolean
                                               }) {
    const layoutStadiumContext: LayoutStadium = useContext(LayoutStadiumContext)
    const selectedAreaContext: ProviderSelectedAreaProp = useContext(SelectedAreaContext)
    const subAreaStadiumContext: ProviderSelectedSubAreaProp = useContext(SelectedSubAreaContext)
    const cssStyle = getCssStyle()
    const handleClickArea = (idArea: string, idSubArea: string) => {
        selectedAreaContext.SelectArea(idArea)
        subAreaStadiumContext.SelectSubArea(idSubArea)
        displaySubAreaSelected()
    }

    return (
        <div className={`${style.principalGridOpen} ${cssStyle.animation}`}>
            <div className={`${style.principalGridOpen} ${cssStyle.animation}`}>
                <div className={cssStyle.stateTickets}>
                    <SVG className={style.mainContSvg}
                         onLoad={postCss}
                         src={layoutStadiumContext.UrlSvg}/>
                </div>
            </div>
        </div>
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