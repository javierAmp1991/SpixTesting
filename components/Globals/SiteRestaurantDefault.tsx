import {useMediaQuery} from "../../pages";
import DefaultLayoutMobile from "../Mobile/defaultLayoutMobile";
import DefaultLayoutDesktop from "../Desktop/defaultLayoutDesktop";
import InitialPageRestaurant from "../Desktop/Site/TypeSites/Business/Restaurant/InitialPageRestaurant";
import InitialPageRestaurantMobile from "../Mobile/Site/TypeSites/Business/Restaurant/InitialPageRestaurantMobile";

export default function SiteRestaurantDefault() {
    const isSmallDown = useMediaQuery('(max-width: 1360px)');
    return (
        isSmallDown ?
            <DefaultLayoutMobile isDarkMode={false}>
                <InitialPageRestaurantMobile/>
            </DefaultLayoutMobile>
            :
            <DefaultLayoutDesktop isDarkMode={false} isLogged={false} darkModeToggle={null}>
                <InitialPageRestaurant/>
            </DefaultLayoutDesktop>
    )
}