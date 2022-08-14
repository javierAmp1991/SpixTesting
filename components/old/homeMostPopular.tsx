import {MostPopularData} from "../../dataDemo/data";
import styles from "/styles/zzzold/homeStyles/homeMostPopular.module.css"
import utilities from "/styles/utilities.module.css"

const mostPopularInfo = MostPopularData.listMostPopular;
let isSmallDown: boolean = false;
let sourceLastTicket: string = "/images/listonRojoUltimas.png";

export default function HomeMostPopular({darkModeState}) {
    let cssStyle = getCssStyles()
    return (
        isSmallDown ?
            <div className="py-2">
                <div className="overflow-scroll">
                    <div className={styles.gridMostPopular}>
                        {
                            mostPopularInfo.map(mostPopularItem =>
                                <a key={mostPopularItem.EventId} className="flex justify-center">
                                    <div className={`${styles.sizeImageMostPopular} relative`}>
                                        {
                                            mostPopularItem.SoldTickets >= mostPopularItem.TotalTickets * 0.90 ?
                                                <img className={`${utilities.positionLastTicket} absolute z-40`}
                                                     src={sourceLastTicket}/>
                                                :
                                                ""
                                        }

                                        <img className={styles.sizeImageMostPopular}
                                             src={mostPopularItem.CoverImage} alt=""/>


                                        <div className={utilities.borderCards}>
                                            <img
                                                className={`${styles.positionLastTickets} h-12 w-auto absolute rounded50 z-50`}
                                                src={mostPopularItem.LogoPath} alt=""/>
                                        </div>
                                    </div>
                                </a>
                            )
                        }
                    </div>
                </div>

                <div className={styles.gridNavItems}>
                    {
                        mostPopularInfo.map(info =>
                            <div key={info.EventId} className={`${cssStyle.borderItem} ${styles.navCircle}`}></div>
                        )
                    }
                </div>
            </div>
            :
            <div className={styles.gridMostPopular}>
                {
                    mostPopularInfo.map(mostPopularItem =>
                        <a key={mostPopularItem.CoverImage}>
                            <div className={`${cssStyle.borderCard} relative`}>
                                <img className="w-full h-auto z-30" src={mostPopularItem.CoverImage} alt=""/>
                                {
                                    mostPopularItem.SoldTickets >= mostPopularItem.TotalTickets * 0.90 ?
                                        <img className={`${styles.positionLastTickets} absolute  z-40`}
                                             src={sourceLastTicket}/>
                                        :
                                        ""
                                }

                            </div>
                        </a>
                    )
                }
            </div>
    )
    function getCssStyles(){
        return {
            borderCard: darkModeState ? utilities.borderCardsDarkMode : utilities.borderCards,
            borderItem: darkModeState? styles.borderItemsDarkMode : styles.borderItems
        }
    }
}