import style from "/styles/Desktop/Site/TypeSite/Events/ticketSection.module.css"
import Image from "next/image";
import {useState} from "react";
import {GlobalConst} from "../../../../../public/globalConst";

const option0: string = "0px"
const option100: string = "120px"
const seeMap: string = "Ver Mapa"
const dateText: string = "Seleccionar Fecha"
const listColor: string[] = ["red", "blue", "green", "purple", "yellow", "orange", "black", "gray"]

export default function TicketsSection() {
    let [heightOptions, setHeightOptions] = useState(option0)
    let [displayDates, setDisplayDates] = useState(false)
    const handleDisplayDates = () => setDisplayDates(displayDates = !displayDates)
    const handleHeightOption = () => setHeightOptions(heightOptions = heightOptions == option0 ? option100 : option0)
    return (
        <div className={style.mainDiv}>
            <div className={style.title}>
                Tickets
            </div>

            <div className={style.contDates}>
                <button onClick={handleDisplayDates} className={style.subtitle}>
                    {dateText}
                    <div style={{transform: displayDates && "rotate(180deg)"}} className={style.bottomArrowDate}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.bottomArrow}/>
                    </div>
                </button>
                {
                    displayDates &&
                    <div className={style.gridDates}>
                        {
                            [...Array(3)].map((e, index) =>
                                <button key={index} className={`${index == 0 && style.buttonSelected} ${style.buttonDate}`}>
                                    Domingo 24 oct 2022
                                </button>
                            )
                        }

                    </div>
                }
            </div>


            <div>
                <div className={style.gridArrowsTags}>
                    <button style={{marginRight: 16}} className={style.arrowStyle}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.leftArrow}/>
                    </button>
                    <div className={style.select}>
                        {
                            [...Array(12)].map((e, index) =>
                                <button key={index} className={index == 0? style.optionSelected : style.option}>
                                    Area Opcion {index}
                                </button>
                            )
                        }
                    </div>
                    <button style={{marginLeft: 16}} className={style.arrowStyle}>
                        <Image layout={"fill"} src={GlobalConst.sourceImages.rightArrow}/>
                    </button>
                </div>
            </div>

            <div className={style.gridImageTickets}>
                <div className={style.relative}>
                    <div className={style.gridTickets}>
                        {
                            [...Array(8)].map((e, index) =>
                                <div style={{borderBottom: `2px solid ${listColor[index]}`}} key={index} className={style.ticketCont}>
                                    <div className={style.leftDiv}>
                                        <div className={style.gridColorName}>
                                            <div style={{background: listColor[index]}} className={style.circle2}/>
                                            <div className={style.name}>
                                                Zona Palco Vip Sur
                                            </div>
                                        </div>
                                        <div className={style.price}>
                                            $ 9.990 - $57.990
                                        </div>
                                        <div className={style.discount}>
                                            Dcto 2da Unidad
                                        </div>
                                    </div>
                                    <div className={style.rightDiv}>
                                        <div className={style.buttonStyle}>
                                            Comprar
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                        <div className={style.positionBottomArrow}>
                            <div className={style.sizeBottomArrow}>
                                <Image layout={"fill"} src={GlobalConst.sourceImages.bottomArrow}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={style.nameVenue}>
                        Nombre Recinto
                    </div>
                    <div className={style.sizeImage}>
                        <Image layout={"fill"} objectFit={"contain"} src={"/images/juventusFinal.svg"}/>
                    </div>
                    <div className={style.gridDirection}>
                        <div className={style.sizeGoogleMap}>
                            <Image layout={"fill"} src={GlobalConst.sourceImages.googleMap}/>
                        </div>
                        <div className={style.seeMap}>
                            {seeMap}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}