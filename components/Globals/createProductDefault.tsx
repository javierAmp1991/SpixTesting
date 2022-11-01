import {useMediaQuery} from "../../pages";
import DefaultLayoutMobile from "../Mobile/defaultLayoutMobile";
import DefaultLayoutDesktop from "../Desktop/defaultLayoutDesktop";
import CreateProductPage from "../Desktop/ProductManagement/createProductPage";
import CreateProductPageMobile from "../Mobile/ProductManagement/createProductPageMobile";

export default function CreateProductDefault() {
    const isSmallDown = useMediaQuery('(max-width: 1360px)');
    return (
        isSmallDown ?
            <DefaultLayoutMobile isDarkMode={false}>
                <CreateProductPageMobile/>
            </DefaultLayoutMobile>
            :
            <DefaultLayoutDesktop isDarkMode={false} isLogged={false} darkModeToggle={null}>
                <CreateProductPage/>
            </DefaultLayoutDesktop>
    )
}