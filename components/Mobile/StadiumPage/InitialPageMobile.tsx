import Image from "next/image";
import style from "/styles/Mobile/StadiumPage/selectionNumber.module.css";
import React, {useContext} from "react";
import {NumberTicketWant, ProviderNumberWantProp} from "../../Desktop/StadiumPage/stadiumLayutProvider";

export default function InitialPageMobile() {
    const numberTicketWantContext: ProviderNumberWantProp = useContext(NumberTicketWant)
    const handleNumberTickets = (num: number) => {
        numberTicketWantContext.SelectNumber(num)
    }
    return (
        <div style={{display: numberTicketWantContext.NumberWant == 0 ? "grid" : "none"}} className={style.mainDiv}>
            <div className={style.mainDivPopUp}>
                <div className={style.sizeLogo}>
                    <Image layout={"fill"} src={"/images/spixBlue.png"} alt={""}/>
                </div>
                <div className={style.mainDivSlectionZone}>
                    <div className={style.titleInfo}>
                        Selecciona el numero de entradas que quieres
                    </div>
                    <div className={style.SubtitleInfo}>
                        No tengo idea que iria aqui pero se que algo debe ir asi que por eso lo
                        pongo,
                        y si no va nada que me parta un rasho laser.
                    </div>
                    <div className={style.contGrid}>
                        <div className={style.gridSelectionZone}>
                            {
                                numberTicketWantContext.ListNumberWant.map((item, index) =>
                                    <button onClick={() => handleNumberTickets(item)}
                                            className={style.contSelection} key={index}>
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