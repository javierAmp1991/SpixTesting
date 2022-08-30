import utilities from "/styles/utilities.module.css"
import style from "/styles/Mobile/Misc/suggHeader.module.css"
import {GlobalConst} from "../../../public/globalConst";
import SearchBarMobile from "./searchBarMobile";
import ResultEventSug from "./ResultEventSug";
import ResultBussinesSug from "./ResultBussinesSug";
import {useState} from "react";
import Image from "next/image";
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
            "Recinto1", "Recinto2", "Recinto3", "Recinto4"
        ]
    },
    {
        Name: "Nombre Evento 2",
        Rating: 30,
        InVenue: [
            "Recinto1", "Recinto2", "Recinto3", "Recinto4"
        ]
    },
    {
        Name: "Nombre Evento 3",
        Rating: 30,
        InVenue: [
            "Recinto1", "Recinto2", "Recinto3", "Recinto4"
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
const styleSearchBar: boolean = true

export default function SuggHeaderMobile({returnMet}) {
    let [isDisplaySug, setIsDisplaySug] = useState(false)
    const showSug = () => setIsDisplaySug(isDisplaySug = true)
    const hiddeSug = () => setIsDisplaySug(isDisplaySug = false)
    let [textSearch, setTextSearch] = useState("")
    const handleTextSearch = (e) => setTextSearch(textSearch = e)
    return (
        <div className={`${style.mainCont} bg-white`}>
            <div className={`${style.gridReturnSearchBar} ${utilities.bgBodyDarkMode}`}>
                <button onClick={returnMet}>
                    <div className={style.returnButton}>
                    <Image layout={"fill"} src={GlobalConst.sourceImages.leftArrowExitWhite} alt=""/>
                    </div>
                </button>
                <div className={style.styleSearchBar}>
                    <SearchBarMobile isSug={true}
                                     isDisplaySug={null}
                                     styleSearchBar={styleSearchBar}
                                     showSug={showSug}
                                     hiddeSug={hiddeSug}
                                     getTextInput={handleTextSearch}
                    />
                </div>
            </div>
            {
                isDisplaySug ?
                    <div className={style.mainContSug}>
                        <ResultBussinesSug item={resultInfo.BussinesResult}/>
                        <ResultEventSug item={resultInfo.EventResult}/>
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