import utilities from "/styles/utilities.module.css"
import style from "/styles/Mobile/Search/defaultPage.module.css"
export default function DefaultPageMobile({children}){
    return(
        <div>
            <div> {/*filters*/}

            </div>
            <div className={style.paddingSectionResult}> {/*resultados*/}
                <div className={style.gridResults}>
                    {children}
                </div>
            </div>
        </div>

    )
}