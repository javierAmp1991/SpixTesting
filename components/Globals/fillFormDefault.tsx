import {useMediaQuery} from "../../pages";
import DefaultLayoutMobile from "../Mobile/defaultLayoutMobile";
import DefaultLayoutDesktop from "../Desktop/defaultLayoutDesktop";
import FillFormPage from "../Desktop/Form/fillFormPage";

export default function FillFormDefault() {
    const isSmallDown = useMediaQuery('(max-width: 1501px)');
    return (
        isSmallDown ?
            <DefaultLayoutMobile isDarkMode={false}>
                <div>teset</div>
            </DefaultLayoutMobile>
            :
            <DefaultLayoutDesktop isDarkMode={false} isLogged={false} darkModeToggle={null}>
                <FillFormPage/>
            </DefaultLayoutDesktop>
    )
}