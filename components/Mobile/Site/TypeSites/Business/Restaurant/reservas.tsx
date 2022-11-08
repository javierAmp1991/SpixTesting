import style from "/styles/Mobile/Site/TypeSite/Bussines/Restaurant/reservas2.module.css"
import LayoutTitleMobile from "./layoutTitleMobile";

const horario = [
    {
        Id: "horario001",
        Hour: "08:00",
        IsDisponible: true,
    },
    {
        Id: "horario002",
        Hour: "09:00",
        IsDisponible: true,
    },
    {
        Id: "horario003",
        Hour: "10:00",
        IsDisponible: false,
    },
    {
        Id: "horario004",
        Hour: "11:00",
        IsDisponible: true,
    },
    {
        Id: "horario005",
        Hour: "12:00",
        IsDisponible: true,
    },
    {
        Id: "horario006",
        Hour: "13:00",
        IsDisponible: true,
    },
    {
        Id: "horario007",
        Hour: "14:00",
        IsDisponible: false,
    },
    {
        Id: "horario008",
        Hour: "15:00",
        IsDisponible: true,
    },
    {
        Id: "horario009",
        Hour: "16:00",
        IsDisponible: true,
    },
    {
        Id: "horario0010",
        Hour: "17:00",
        IsDisponible: true,
    },
    {
        Id: "horario0011",
        Hour: "18:00",
        IsDisponible: true,
    },
    {
        Id: "horario0012",
        Hour: "19:00",
        IsDisponible: false,
    },
    {
        Id: "horario0013",
        Hour: "20:00",
        IsDisponible: true,
    },
]
const greenColor: string = "#10c010"
const redColor: string = "#ff4a4a"
const title: string = "Reservas"
const horarioText: string = "Horario:"
const disponibleTagText = "Reservas Disponibles"
const noDisponibleTagText = "Reservas agotadas"

export default function ReservasMobile() {
    return (
        <div className={style.mainCont}>
            <div className={style.mainDiv}>
                <div className={style.title}>
                    {title}
                </div>
                <div className={style.hour}>
                    {horarioText} de 08:00 a 20:00
                </div>
                <div className={style.gridTags}>
                    <div className={style.tagDisponible1}>
                        {disponibleTagText}
                    </div>
                    <div className={style.tagReservado1}>
                        {noDisponibleTagText}
                    </div>
                    <div className={style.tagDisponible2}/>
                    <div className={style.tagReservado2}/>
                </div>
                <div className={style.lineCircle}/>
                <div className={style.gridHoursLapse}>
                    {
                        horario.map((item, index) =>

                            <div key={item.Id}
                                 style={{borderBottom: `2px solid ${item.IsDisponible ? greenColor : redColor}`}}
                                 className={`${style.baseTag} 
                                     ${(index + 1) % 2 == 0 ? style.leftSide : style.rightSide}`}>
                                <div>{item.Hour} hrs.</div>
                                <span style={{
                                    border: `2px solid ${item.IsDisponible ? greenColor : redColor}`,
                                    left: (index + 1) % 2 == 0 ? "calc(100% + 8px)" : "-24px"
                                }}
                                      className={style.baseCircle}/>
                            </div>
                        )
                    }
                </div>
                <div className={style.lineCircle}/>
            </div>
            <button className={style.styleButton}>
                Reservar tu Mesa
            </button>
        </div>
    )
}