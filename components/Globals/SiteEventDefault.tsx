import {useMediaQuery} from "../../pages";
import DefaultLayoutMobile from "../Mobile/defaultLayoutMobile";
import DefaultLayoutDesktop from "../Desktop/defaultLayoutDesktop";
import MainPage from "../Desktop/Site/TypeSites/Events/MainPage";

export default function SiteEventDefault() {
    const isSmallDown = useMediaQuery('(max-width: 1280px)');
    return (
        isSmallDown ?
            <DefaultLayoutMobile isDarkMode={false}>
                <div>

                </div>
            </DefaultLayoutMobile>
            :
            <DefaultLayoutDesktop isDarkMode={false} isLogged={false} darkModeToggle={null}>
                <MainPage/>
            </DefaultLayoutDesktop>
    )
}