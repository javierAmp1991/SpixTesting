import LayoutTitle from "./layoutTitle";
import style from "/styles/Desktop/Site/TypeSite/Bussines/Restaurant/reservas.module.css"

const listDates: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

export default function Reservas() {
    return (
        <LayoutTitle title={"Reservas"}>
            <div className={style.mainCont}>
                <div className={style.mainDiv}>
                    <div className={style.hour}>
                        Horario: 08:00 - 16:00 / 18:00 -00:00
                    </div>
                    <div className={style.gridTags}>
                        <div className={style.tagDisponible1}>
                            Disponible
                        </div>
                        <div className={style.tagReservado1}>
                            Reservado
                        </div>
                    </div>
                    <div className={style.gridDates}>
                        <div className={style.gridHoursLapse}>
                            {
                                [...Array(6)].map(e =>
                                    <>
                                        <div className={style.disponibleLapse}>
                                            <div>08:00 hrs.</div>
                                        </div>
                                        <div className={style.noDisponibleLapse}>
                                            <div>10:00 hrs.</div>
                                        </div>
                                    </>
                                )
                            }
                        </div>
                        <div className={style.gridHoursLapse}>
                            {
                                [...Array(6)].map(e =>
                                    <>
                                        <div className={style.disponibleLapse}>
                                            <div>08:00 hrs.</div>
                                        </div>
                                        <div className={style.noDisponibleLapse}>
                                            <div>10:00 hrs.</div>
                                        </div>
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
                <button className={style.styleButton}>
                    Reservar tu Mesa
                </button>
            </div>
        </LayoutTitle>
    )
}