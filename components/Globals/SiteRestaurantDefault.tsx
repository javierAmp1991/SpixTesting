import {useMediaQuery} from "../../pages";
import DefaultLayoutMobile from "../Mobile/defaultLayoutMobile";
import DefaultLayoutDesktop from "../Desktop/defaultLayoutDesktop";
import SitePageRestaurantLayout from "../Desktop/SitePageRestaurant/SitePageRestaurantLayout";
import InitialPageRestaurant from "../Desktop/Site/TypeSites/Business/Restaurant/InitialPageRestaurant";

export default function SiteRestaurantDefault() {
    const isSmallDown = useMediaQuery('(max-width: 1501px)');
    return (
        isSmallDown ?
            <DefaultLayoutMobile isDarkMode={false}>
                <div>
                    test
                </div>
            </DefaultLayoutMobile>
            :
            <DefaultLayoutDesktop isDarkMode={false} isLogged={false} darkModeToggle={null}>
                <InitialPageRestaurant/>
            </DefaultLayoutDesktop>
    )
}