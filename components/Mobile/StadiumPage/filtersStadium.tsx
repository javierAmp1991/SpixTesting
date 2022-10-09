import style from "/styles/Mobile/StadiumPage/filterStadium.module.css"
import {NumberTicketWant, ProviderNumberWantProp} from "../../Desktop/StadiumPage/stadiumLayutProvider";
import React, {useContext} from "react";
import Image from "next/image";
import utilities from "/styles/utilities.module.css";
import {GlobalConst} from "../../../public/globalConst";

const howManyTickets: string = "Selecciona el numero de entradas"


export default function FiltersStadiumMobile({isOpenFilter}: { isOpenFilter: Function }) {
    const numberTicketWant: ProviderNumberWantProp = useContext(NumberTicketWant)
    const handleUpdateTickets = (num: number) => {
        numberTicketWant.SelectNumber(num)
    }
    const handleDisplayFilters = () => isOpenFilter()
    /*const handleMinPrice = (e) => {
    }
    const handleMaxPrice = (e) => {
    }*/

    return (
        <div className={style.mainDiv}>
            <div className={style.mainDivNumbers}>
                <div className={style.gridNumbDisplay}>
                    <div>
                        {howManyTickets}
                    </div>
                    <button onClick={handleDisplayFilters}
                            className={style.gridFilterButton}>
                        <div className={`${utilities.fontPrimaryText} ${style.fontSize}`}>
                            Filtros
                        </div>
                        <div className={style.sizeDisplayFilters}>
                            <Image layout={"fill"}
                                   src={GlobalConst.sourceImages.engineIcon} alt={""}/>
                        </div>
                    </button>

                </div>
                <div className={style.gridNumberTickets}>
                    {
                        numberTicketWant.ListNumberWant.map((item, index) =>
                            <button onClick={() => handleUpdateTickets(item)} key={index}
                                    className={item == numberTicketWant.NumberWant? style.contNumberSelected : style.contNumber}>
                                {item}
                            </button>
                        )
                    }
                </div>
            </div>
        </div>
    )
}