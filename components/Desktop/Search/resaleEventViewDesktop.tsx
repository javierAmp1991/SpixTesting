import utilities from "/styles/utilities.module.css"
import styles from "/styles/Desktop/Search/resaleEventView.module.css"
import {GlobalConst} from "../../../public/globalConst";
import Image from "next/image";
import {EventSearch} from "../../../dataDemo/search/searchData";
import Link from "next/link";

export default function ResaleEventViewDesktop({item, darkModeState}: { item: EventSearch, darkModeState: boolean }) {
    let cssStyles = getCssStyles()

    return (
        <div className={`${styles.principalGridVertical} ${cssStyles.borderCard}`}>
            <Link href={"/resaleTicketSearch"}>
                <a className="relative">
                    <div className={`${styles.sizeImage} z-10`}>
                        <Image layout={"fill"} src={item.CoverImage} alt=""/>
                    </div>
                </a>
            </Link>

            <div className={`${cssStyles.bgInfo} grid px-7 py-2 content-start`}>

                <div className={`${cssStyles.fontName} ${utilities.clamp1}`}>
                    {item.Title}
                </div>

                <div className={`${utilities.fontPrimaryText} mt-px`}>
                    {item.SubTitle}
                </div>

                <div className={`${utilities.gridMaxContent2} items-center gap-1.5 mb-2`}>
                    {
                        item.Rating != null ?
                            <>
                                <div className={utilities.ratingStarsProperties}>
                                    <Image layout={"fill"} src={GlobalConst.sourceImages.ratingNew} alt=""/>
                                </div>
                                <div className={`${cssStyles.fontSecundaryText} ${utilities.font12} pt-0.5`}>
                                    ({item.Rating})
                                </div>
                            </>
                            :
                            <>
                                <div className={utilities.ratingStarsProperties}>
                                    <Image layout={"fill"} src={GlobalConst.sourceImages.ratingNull} alt=""/>
                                </div>
                                <div className={`${cssStyles.fontSecundaryText} font12 pt-0.5`}>
                                    (0)
                                </div>
                            </>
                    }
                </div>

                <div className={`${cssStyles.fontPrimaryText} mb-1`}>
                    Total reventas: {item.TotalResale}
                </div>
            </div>
        </div>
    )

    function getCssStyles() {
        return {
            borderCard: darkModeState ? utilities.borderCardsDarkMode : utilities.borderCards,
            bgInfo: darkModeState ? utilities.bgDarkModeInfo : utilities.bgNormalInfo,
            fontName: darkModeState ? utilities.fontNameDarkMode : utilities.fontName,
            fontSecundaryText: darkModeState ? utilities.fontSecundaryTextDarkMode : utilities.fontSecundaryText,
            fontPrimaryText: darkModeState ? utilities.fontPrimarTextDarkMode : utilities.fontPrimaryText
        }
    }
}