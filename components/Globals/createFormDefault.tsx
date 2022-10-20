import {useMediaQuery} from "../../pages";
import DefaultLayoutMobile from "../Mobile/defaultLayoutMobile";
import DefaultLayoutDesktop from "../Desktop/defaultLayoutDesktop";
import CreateFormPage from "../Desktop/Form/createFormPage";
import CreateFormPageMobile from "../Mobile/Form/createFormPageMobile";

export default function CreateFormDefault() {
    const isSmallDown = useMediaQuery('(max-width: 1501px)');
    return (
        isSmallDown ?
            <DefaultLayoutMobile isDarkMode={false}>
                <CreateFormPageMobile/>
            </DefaultLayoutMobile>
            :
            <DefaultLayoutDesktop isDarkMode={false} isLogged={false} darkModeToggle={null}>
                <CreateFormPage/>
            </DefaultLayoutDesktop>
    )
}