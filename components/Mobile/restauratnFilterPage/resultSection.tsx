import style from "/styles/Mobile/RestaurantFilterPage/resultSection.module.css"
import ButtonNavegationMobile from "../Misc/buttonNavegationMobile";
import {EventLookUp} from "../../../dataDemo/data";
import EventHorizontalView from "../Events/eventHorizontalView";
const nextButton: string = "Siguiente"
const returnButton: string = "Anterior"

/*
export default function ResultSection({listResult} : {listResult: EventLookUp[]}) {
    return (
        <div className={style.mainDiv}>
            <div className={style.gridResult}>
                {
                    listResult.map((item, index) =>
                    <EventHorizontalView info={item} darkModeState={false} key={index}/>
                    )
                }
            </div>

            <div className={style.gridButtons}>
                <ButtonNavegationMobile item={returnButton} isDarkMode={false}/>
                <ButtonNavegationMobile item={nextButton} isDarkMode={false}/>
            </div>
        </div>
    )
}*/
