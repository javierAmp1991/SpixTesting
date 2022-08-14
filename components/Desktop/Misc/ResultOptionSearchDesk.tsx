import utilities from "/styles/utilities.module.css"
import style from "/styles/Desktop/Misc/resultOptionSearch.module.css"
export default function ResultOptionSearchDesk({listSug} : {listSug : string[]}){
    return(
        <div className={style.mainCont}>
            {
                listSug.map((item,index) =>
                    <div key={index} className={utilities.fontSecundaryText}>
                        {item}
                    </div>
                )
            }
        </div>
    )
}