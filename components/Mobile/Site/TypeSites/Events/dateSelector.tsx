import React, {useContext, useState} from "react";
import {PrincipalInfoEvent} from "../../../../../Class/Site/TypeSite/Events/events";
import {PrincipalInfoEventContext} from "../../../../Providers/Site/TypeSite/Events/eventProvider";
import style from "/styles/Mobile/Site/TypeSite/Events/dateSelector.module.css"

const nextDates: string = "Proximas Fechas:"
const dateText: string = "Fecha:"
export default function DateSelector() {
    const info: PrincipalInfoEvent = useContext(PrincipalInfoEventContext)
    let [dateVenueSelected, setDateVenueSelected] = useState(info.DateVenue[0])
    let [datesEvents, setDatesEvents] = useState(info.DateVenue)
    let [displayMap, setDisplayMap] = useState(false)
    const handleDisplayMap = () => setDisplayMap(displayMap = !displayMap)
    const handleSelectedDirection = (id: string) => {
        datesEvents.forEach(item => {
            item.Id == id && setDateVenueSelected(dateVenueSelected = item)
        })
        let newList = datesEvents.map(item => {
            if (item.Id == id) return {...item, IsSelected: true}
            else return {...item, IsSelected: false}
        })
        setDatesEvents(datesEvents = newList)
    }
    return (
        <div className={style.gridPrinDates}>

            <div className={style.gridDates}>
                <div className={style.titleNextDates}>
                    {nextDates}
                </div>
                {
                    datesEvents.map(item =>
                        <button key={item.Id} onClick={() => handleSelectedDirection(item.Id)}
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
                                <button onClick={handleDisplayMap} className={style.seeMap}>
                                    Ver mapa
                                </button>
                            }
                        </button>
                    )
                }
            </div>
        </div>
    )

    function getDateFormat(item: Date) {
        return `${item.toLocaleString("es-US", {weekday: "long"})} ${item.getDate()} ${item.toLocaleString("es-US", {month: "short"})} ${item.getFullYear()}`
    }
}