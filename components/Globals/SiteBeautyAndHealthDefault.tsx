import {useMediaQuery} from "../../pages";
import DefaultLayoutMobile from "../Mobile/defaultLayoutMobile";
import DefaultLayoutDesktop from "../Desktop/defaultLayoutDesktop";
import MainPageBH from "../Desktop/Site/TypeSites/Business/Beauty&Health/mainPageBH";
import MainPageBHMobile from "../Mobile/Site/TypeSites/Business/Beauty&Health/mainPageBHMobile";

export default function SiteBeautyAndHealthDefault() {
    const isSmallDown = useMediaQuery('(max-width: 1360px)');
    return (
        isSmallDown ?
            <DefaultLayoutMobile isDarkMode={false}>
                <MainPageBHMobile/>
            </DefaultLayoutMobile>
            :
            <DefaultLayoutDesktop isDarkMode={false} isLogged={false} darkModeToggle={null}>
                <MainPageBH/>
            </DefaultLayoutDesktop>
    )
}