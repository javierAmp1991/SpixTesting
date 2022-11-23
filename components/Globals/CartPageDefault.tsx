import {useMediaQuery} from "../../pages";
import DefaultLayoutMobile from "../Mobile/defaultLayoutMobile";
import DefaultLayoutDesktop from "../Desktop/defaultLayoutDesktop";
import InitialCartPage from "../Desktop/CartPage/initialCartPage";

export default function CartPageDefault(){
    const isSmallDown = useMediaQuery('(max-width: 1360px)');
    return (
        isSmallDown ?
            <DefaultLayoutMobile isDarkMode={false}>
                <div>
                    mobile
                </div>
            </DefaultLayoutMobile>
            :
            <DefaultLayoutDesktop isDarkMode={false} isLogged={false} darkModeToggle={null}>
                <InitialCartPage/>
            </DefaultLayoutDesktop>
    )
}