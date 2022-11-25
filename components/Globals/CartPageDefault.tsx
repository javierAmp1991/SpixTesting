import {useMediaQuery} from "../../pages";
import DefaultLayoutMobile from "../Mobile/defaultLayoutMobile";
import DefaultLayoutDesktop from "../Desktop/defaultLayoutDesktop";
import InitialCartPage from "../Desktop/CartPage/initialCartPage";
import MainPageCartPageMob from "../Mobile/CartPage/mainPageCartPageMob";

export default function CartPageDefault() {
    const isSmallDown = useMediaQuery('(max-width: 1360px)');
    return (
        isSmallDown ?
            <DefaultLayoutMobile isDarkMode={false}>
                <MainPageCartPageMob/>
            </DefaultLayoutMobile>
            :
            <DefaultLayoutDesktop isDarkMode={false} isLogged={false} darkModeToggle={null}>
                <InitialCartPage/>
            </DefaultLayoutDesktop>
    )
}