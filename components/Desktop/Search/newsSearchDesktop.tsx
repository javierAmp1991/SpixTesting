import Image from "next/image";
import utilities from "/styles/utilities.module.css"
import style from "/styles/Desktop/Search/newsSearch.module.css"
import {News} from "../../../dataDemo/data";
import Link from "next/link";

const writeRNew: string = "Leer noticia"


export default function NewsSearchDesktop({
                                              item,
                                              isSubtitle,
                                              isDarkMode
                                          }: { item: News, isSubtitle: boolean, isDarkMode: boolean }) {
    const cssStyle = getCssStyle()
    return (
        <div className={`${cssStyle.borderCard} ${cssStyle.bg}`}>
            <div className={style.sizeImage}>
                <Image layout={"fill"} src={item.PathImage} alt={""}/>
            </div>
            <div className={style.absCont}>
                <div className={`${cssStyle.title} ${utilities.clamp2}`}>
                    {item.Title}
                </div>
                <div className={`${cssStyle.date} ${style.eventNew}`}>
                    {item.Date}
                </div>
                {
                    isSubtitle &&
                    <div className={`${utilities.clamp2} ${cssStyle.subtitle}`}>
                        {item.SubTitle}
                    </div>
                }
                <Link href={""}>
                    <a className={style.gridReadNew}>
                        <span className={`${cssStyle.styleLink} ${style.writeNew}`}>
                            {writeRNew}
                        </span>
                    </a>
                </Link>
            </div>

        </div>
    )

    function getCssStyle() {
        return {
            bg: isDarkMode ? utilities.bgDarkModeInfoDesktop : utilities.bgNormalInfoDesktop,
            styleLink: isDarkMode ? utilities.styleLinkDarkMode : utilities.styleLink,
            title: isDarkMode? style.fontTitleDarkMode : style.fontTitle,
            subtitle: isDarkMode ? style.fontSubTitleDarkMode : style.fontSubTitle,
            date: isDarkMode ? utilities.fontSecundaryTextDarkMode : utilities.fontSecundaryText,
            borderCard: isDarkMode? utilities.borderCardDesktopDarkMode : utilities.borderCardDesktop,
        }
    }
}