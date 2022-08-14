import style from "/styles/Desktop/Misc/headerSpixDesktop.module.css"
import utilities from "/styles/utilities.module.css"
import {GlobalConst} from "../../../public/globalConst";
import SearchBarDesk from "./searchBarDesk";
import ResultBussinesSugDesk from "./ResultBussinesSugDesk";
import ResultEventSugDesk from "./ResultEventSugDesk";
import {useState} from "react";
import Image from "next/image";

const styleGrid: string = `${utilities.gridMaxContent2} gap-2`
const paddingImage: string = "pt-1.5"
const styleSideText: string = `${style.colorTextHeader} text-left`
const fontFirstText: string = utilities.font12
const fontSecondText: string = utilities.font14
const mode = "Modo" /*llamar a algo*/
const day = "Dia" /*llamar a algo*/
const night = "Noche" /*llamar a algo*/
export class ResultInfo {
    EventResult: EventResult[];
    BussinesResult: BussinesResult[];
    Sugresult: string[]
}

export class EventResult {
    Name: string;
    Rating: number;
    InVenue: string[]
}

export class BussinesResult {
    Name: string
    AmountEvents: number
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
    "Sugerencia1", "Sugerencia2", "Sugerencia3"
]
let resultInfo: ResultInfo = {
    EventResult: listEventResult,
    BussinesResult: listBussinesresult,
    Sugresult: listSug
}

export default function HeaderSpixDesktop({darkMode, isLogged, toggleDarkMode}) {
    let [isdisplaySug, setIsDisplaySug] = useState(false)
    const showIsDisplaySug = () => setIsDisplaySug(isdisplaySug = true)
    const hiddeIsDisplaySug = () => setIsDisplaySug(isdisplaySug = false)

    let [textSearch, setTextSearch] = useState("")
    const handleTextSearch = (e) => setTextSearch(textSearch = e)
    const cssStyles = getCssStyles()
    const darkModeIconInfo = getDarkModeIconInfo()

    return (
        <div className={cssStyles.backgroundColor}>
            <div className={style.gridHeader}>
                <a className={paddingImage}>
                    <div className={style.sizeIcons}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.logoSpixHeaderDesk} alt=""/>
                    </div>
                </a>

                <a className={styleGrid}>
                    <div className={paddingImage}>
                        <div className={style.sizeIcons}>
                            <Image layout={"fill"} src={GlobalConst.sourceImages.locationHeaderDesktop} alt=""/>
                        </div>
                    </div>
                    <div className={styleSideText}>
                        <div className={fontFirstText}>Ingresa tu</div>
                        <div className={fontSecondText}>Ubicacion</div>
                    </div>
                </a>
                <div className="relative">
                    <SearchBarDesk showSug={showIsDisplaySug}
                                   hiddeSug={hiddeIsDisplaySug}
                                   getInputValue={handleTextSearch}
                                   isSug={isdisplaySug}/>

                    {
                        isdisplaySug ?
                            <div className={style.contSug}>
                                <ResultBussinesSugDesk item={resultInfo.BussinesResult}/>
                                <ResultEventSugDesk item={resultInfo.EventResult}/>
                                <div className={`${utilities.styleLink} ${style.seeAll}`}>
                                    Ver mas resultadosd
                                </div>
                            </div>
                            :
                            <></>
                    }
                </div>

                {
                    isLogged ?

                        <a className={styleGrid}>
                            <div className={style.containerAccountImage}>
                            </div>
                            <div className={styleSideText}>
                                <div className={fontFirstText}>Bienvenida</div>
                                <div className={fontSecondText}>Maria Jose</div>
                            </div>
                        </a>
                        :
                        <a className={styleGrid}>
                            <div className={paddingImage}>
                                <div className={style.sizeIcons}>
                                    <Image layout={"fill"}
                                        src={GlobalConst.sourceImages.logginHeaderDesktop}
                                        alt=""/>
                                </div>
                            </div>
                            <div className={style.colorTextHeader}>
                                <div className={fontFirstText}>Iniciar</div>
                                <div className={fontSecondText}>Sesion</div>
                            </div>
                        </a>
                }

                {/*<a className={styleGrid}>
                    <div className={`${paddingImage} relative`}>
                        <img className={style.sizeIcons} src={GlobalConst.sourceImages.buyCarHeaderDesktop}/>
                        <div className={style.positionNumberCar}>
                            0
                        </div>
                    </div>
                    <div className={styleSideText}>
                        <div className={fontFirstText}>Carrito</div>
                        <div className={fontSecondText}>Compra</div>
                    </div>
                </a>*/}

                <button onClick={toggleDarkMode} className={styleGrid}>
                    <div className={paddingImage}>
                        <div className={style.sizeIcons}>
                        <Image layout={"fill"} src={darkModeIconInfo.icon} alt=""/>
                        </div>
                    </div>
                    <div className={styleSideText}>
                        <div className={fontFirstText}>{mode}</div>
                        <div className={fontSecondText}>{darkModeIconInfo.secondText}</div>
                    </div>
                </button>
            </div>
        </div>
    )

    function getDarkModeIconInfo() {
        return {
            icon: darkMode ? GlobalConst.sourceImages.darkModeDestop : GlobalConst.sourceImages.lightModeDesktop,
            secondText: darkMode ? day : night
        }
    }

    function getCssStyles() {
        return {
            backgroundColor: darkMode ? style.bgHeaderSpixDarkMode : style.bgHeaderSpix
        }
    }
}