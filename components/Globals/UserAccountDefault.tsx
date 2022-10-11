import {useMediaQuery} from "../../pages";
import DefaultLayoutMobile from "../Mobile/defaultLayoutMobile";
import DefaultLayoutDesktop from "../Desktop/defaultLayoutDesktop";
import InitialPageUserAccount from "../Desktop/UserAccount/InitialPageUserAccount";

export default function UserAccountDefault() {
    const isSmallDown = useMediaQuery('(max-width: 1501px)');
    return (
        isSmallDown ?
            <DefaultLayoutMobile isDarkMode={false}>
                <div>
                    mobile
                </div>
            </DefaultLayoutMobile>
            :
            <DefaultLayoutDesktop isDarkMode={false} isLogged={false} darkModeToggle={null}>
                <InitialPageUserAccount/>
            </DefaultLayoutDesktop>
    )
}