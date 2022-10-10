import styleDesk from "/styles/Desktop/StadiumPage/mainPage.module.css";
import Image from "next/image";
import React, {useContext} from "react";
import {NumberTicketWant, ProviderNumberWantProp} from "./stadiumLayutProvider";

export default function InitialPage() {
    const numberTicketWant: ProviderNumberWantProp = useContext(NumberTicketWant)
    const handleNumberTickets = (num: number) => {
        numberTicketWant.SelectNumber(num)
    }
    return (
        <div style={{display: numberTicketWant.NumberWant == 0 ? "grid" : "none"}} className={styleDesk.mainDiv}>
            <div className={styleDesk.mainDivPopUp}>
                <div className={styleDesk.sizeLogo}>
                    <Image layout={"fill"} src={"/images/spixBlue.png"} alt={""}/>
                </div>
                <div className={styleDesk.mainDivSlectionZone}>
                    <div className={styleDesk.titleInfo}>
                        Selecciona el numero de entradas que quieres
                    </div>
                    <div className={styleDesk.SubtitleInfo}>
                        El numero de entradas representa con cuantos acompañantes quieres ir. Al momento de elegir productos o servicios
                        ofrecidos en este evento puedes crear un carro de compra personalizado para cada acompañante asi tienes un mayor
                        control de que cosas son para ti y que cosas son para tus invitados.
                    </div>
                    <div className={styleDesk.contGrid}>
                        <div className={styleDesk.gridSelectionZone}>
                            {
                                numberTicketWant.ListNumberWant.map((item, index) =>
                                    <button onClick={() => handleNumberTickets(item)}
                                            className={styleDesk.contSelection} key={index}>
                                        {item}
                                    </button>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}