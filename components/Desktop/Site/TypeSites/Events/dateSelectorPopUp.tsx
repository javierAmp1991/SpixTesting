import style from "/styles/Desktop/Site/TypeSite/Events/dateSelectorPopUp.module.css";
import React, {useState} from "react";
import Image from "next/image";
import {GlobalConst} from "../../../../../public/globalConst";
import {DateVenue} from "../../../../../dataDemo/data";

const dateText: string = "Fecha:"
export default function DateSelectorPopUp({selectedDate, closeModal, dates}:
                                              { selectedDate: Function, closeModal: Function, dates: DateVenue[] }) {
    let [allDates, setAllDates] = useState(dates)
    let [idSelected, setIdSelected] = useState("")
    const handleAllDates = (id: string) => {
        let newList = allDates.map(item => {
            if (item.Id == id) {
                return {...item, IsSelected: true}
            } else return {...item, IsSelected: false}
        })
        setAllDates(allDates = newList)
        setIdSelected(idSelected = id)
    }
    const handleAceptDate = () => {
        idSelected != "" && selectedDate(idSelected)
        closeModal()
    }
    return (
        <div className={style.mainDiv}>
            <div className={style.gridMainDiv}>
                <div className={style.title}>
                    Seleccionar Fecha
                </div>

                <div className={style.gridDates}>
                    {
                        allDates.map(item =>
                            <button key={item.Id} onClick={() => handleAllDates(item.Id)}
                                    className={`${style.buttonDate}
                                    ${item.IsSelected && style.buttonSelected}`}>
                                <div className={style.gridDate}>
                                    <div className={style.dateColor}>
                                        {dateText} {getDateFormat(item.Date)}
                                    </div>
                                </div>
                                <div className={style.venueColor}>
                                    {item.Venue}
                                </div>
                                {
                                    item.IsSelected &&
                                    <div className={style.sizeCheckIcon}>
                                        <Image layout={"fill"} src={GlobalConst.sourceImages.checkIcon} alt={""}/>
                                    </div>
                                }
                            </button>
                        )
                    }
                </div>

                <button onClick={handleAceptDate} className={style.buttonStyle}>
                    Confirmar Fecha
                </button>
            </div>
        </div>
    )

    function getDateFormat(item: Date) {
        return `${item.toLocaleString("es-US", {weekday: "short"})} ${item.getDate()} ${item.toLocaleString("es-US", {month: "short"})} ${item.getFullYear()}`
    }
}