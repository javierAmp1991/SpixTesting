import utilities from "/styles/utilities.module.css"
import style from "/styles/Desktop/Misc/suggHeader.module.css"
import {GlobalConst} from "../../public/globalConst";
import ResultEventSugDesk from "../Desktop/Misc/ResultEventSugDesk";
import ResultBussinesSugDesk from "../Desktop/Misc/ResultBussinesSugDesk";
import SearchBarDesk from "../Desktop/Misc/searchBarDesk";
import {useState} from "react";

export class EventResult {
    Name: string;
    Rating: number;
    InVenue: string[]
}
export class BussinesResult {
    Name: string
    AmountEvents: number
}
export class ResultInfo {
    EventResult: EventResult[];
    BussinesResult: BussinesResult[];
    Sugresult: string[]
}

let listEventResult: EventResult[] = [
    {
        Name: "Nombre Evento 1",
        Rating: 30,
        InVenue: [
            "local1", "local2", "local3"
        ]
    },
    {
        Name: "Nombre Evento 2",
        Rating: 30,
        InVenue: [
            "local1", "local2", "local3"
        ]
    },
    {
        Name: "Nombre Evento 3",
        Rating: 30,
        InVenue: [
            "local1", "local2"
        ]
    }
]
let listBussinesresult: BussinesResult[] = [
    {
        Name: "Nombre negocio 1",
        AmountEvents: 3
    },
    {
        Name: "Nombre negocio 2",
        AmountEvents: 6
    }
]
let listSug: string[] = [
    "sugerencia1", "sugerencia2", "sugerencia3"
]

let resultInfo: ResultInfo = {
    EventResult: listEventResult,
    BussinesResult: listBussinesresult,
    Sugresult: listSug
}

export default function SuggHeaderDesk({returnMet}) {
    let [isDisplaySug, setIsDisplaySug] = useState(true)
    const handleIsDisplay = () => setIsDisplaySug(isDisplaySug = !isDisplaySug)
    return (
        <div className={style.mainCont}>
            <div className={style.gridReturnSearchBar}>
                <button onClick={returnMet}>
                    <img className={style.returnButton} src={GlobalConst.sourceImages.leftArrowExit} alt=""/>
                </button>
                <div className={style.styleSearchBar}>
                    <SearchBarDesk hiddeSug={null} getInputValue={null} showSug={null} key="keysdasdd"  isSug={true}/>
                </div>
            </div>
            {
                isDisplaySug ?
                    <div className={style.mainContSug}>
                        <div className={`${style.gridSugText} 
                                            ${utilities.fontSecundaryText}
                                            ${utilities.font12}`}>
                            {
                                resultInfo.Sugresult.map((item, index) =>
                                    <div key={index}>{item}</div>
                                )
                            }
                        </div>
                        <ResultBussinesSugDesk item={resultInfo.BussinesResult}/>
                        <ResultEventSugDesk item={resultInfo.EventResult}/>
                        <div className={`${utilities.styleLink} ${style.seeAllResult}`}>
                            Ver todos los resultados
                        </div>
                    </div>
                    :
                    <></>
            }

        </div>
    )
}