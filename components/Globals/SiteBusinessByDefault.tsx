import {useMediaQuery} from "../../pages";
import DefaultLayoutMobile from "../Mobile/defaultLayoutMobile";
import DefaultLayoutDesktop from "../Desktop/defaultLayoutDesktop";
import MainPageByDefault from "../Desktop/Site/TypeSites/Business/ByDefault/mainPage";
import MainPageByDefaultMobile from "../Mobile/Site/TypeSites/Business/ByDefault/mainPageByDefault";

export default function SiteBusinessByDefault(){
    const isSmallDown = useMediaQuery('(max-width: 1360px)');
    return (
        isSmallDown ?
            <DefaultLayoutMobile isDarkMode={false}>
                <MainPageByDefaultMobile/>
            </DefaultLayoutMobile>
            :
            <DefaultLayoutDesktop isDarkMode={false} isLogged={false} darkModeToggle={null}>
                <MainPageByDefault/>
            </DefaultLayoutDesktop>
    )
}