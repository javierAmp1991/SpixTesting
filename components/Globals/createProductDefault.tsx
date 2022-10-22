import {useMediaQuery} from "../../pages";
import DefaultLayoutMobile from "../Mobile/defaultLayoutMobile";
import DefaultLayoutDesktop from "../Desktop/defaultLayoutDesktop";
import CreateProductPage from "../Desktop/CreateProduct/createProductPage";
import CreateProductPageMobile from "../Mobile/CreateProduct/createProductPageMobile";

export default function CreateProductDefault() {
    const isSmallDown = useMediaQuery('(max-width: 1501px)');
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