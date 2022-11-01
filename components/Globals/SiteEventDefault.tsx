import {useMediaQuery} from "../../pages";
import DefaultLayoutMobile from "../Mobile/defaultLayoutMobile";
import DefaultLayoutDesktop from "../Desktop/defaultLayoutDesktop";
import MainPage from "../Desktop/Site/TypeSites/Events/MainPage";
import MainPageMobile from "../Mobile/Site/TypeSites/Events/mainPage";

export default function SiteEventDefault() {
    const isSmallDown = useMediaQuery('(max-width: 1360px)');
    return (
        isSmallDown ?
            <DefaultLayoutMobile isDarkMode={false}>
                <MainPageMobile/>
            </DefaultLayoutMobile>
            :
            <DefaultLayoutDesktop isDarkMode={false} isLogged={false} darkModeToggle={null}>
                <MainPage/>
            </DefaultLayoutDesktop>
    )
}