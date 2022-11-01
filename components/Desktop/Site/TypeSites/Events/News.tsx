import LayoutCarrouselDesktop from "../../../Layouts/layoutCarrouselDesktop";
import {PropCarrousel} from "../../../../../Class/Layouts/layoutClass";
import {ProviderNewsEvents} from "../../../../../Class/Site/TypeSite/Events/events";
import {useContext} from "react";
import {NewsContext} from "../../../../Providers/Site/TypeSite/Events/eventProvider";
import NewsSearchDesktop from "../../../Search/newsSearchDesktop";
import LayoutTitle from "../Business/Restaurant/layoutTitle";

const title: string = "Noticias"

export default function News() {
    const news: ProviderNewsEvents = useContext(NewsContext)
    const layoutPropNews: PropCarrousel = {
        PositionArrowY: "calc(50% - 16px)",
        PositionArrowX: "-16px",
        Padding: 0,
        Gap: 16,
        Grid: 3,
        LeftArrow: () => news.LeftClick(),
        RightArrow: () => news.RightClick()
    }
    return (
        <LayoutTitle title={title}>
            <LayoutCarrouselDesktop layoutProp={layoutPropNews}>
                {
                    news.InitialItems.map(item =>
                        <NewsSearchDesktop key={item.Id} item={item} isSubtitle={false} isDarkMode={false}/>
                    )
                }
            </LayoutCarrouselDesktop>
        </LayoutTitle>
    )
}