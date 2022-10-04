import style from "/styles/Mobile/StadiumPage/filterStadium.module.css"
import {ProviderFiltersPop, FiltersContext} from "./stadiumLayoutProviderMobile";
import React, {useContext} from "react";
import Image from "next/image";
import utilities from "/styles/utilities.module.css";
import {GlobalConst} from "../../../public/globalConst";

const howManyTickets: string = "Selecciona el numero de entradas"


export default function FiltersStadiumMobile({listNumber, numberSelected, updateTickets, isOpenFilter}:
                                                 { listNumber: number[], numberSelected: number,
                                                     updateTickets: Function, isOpenFilter: Function }) {
    const handleUpdateTickets = (num: number) => {
        updateTickets(num)
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
                        listNumber.map((item, index) =>
                            <button onClick={() => handleUpdateTickets(item)} key={index}
                                    className={item == numberSelected ? style.contNumberSelected : style.contNumber}>
                                {item}
                            </button>
                        )
                    }
                </div>
            </div>
        </div>
    )
}