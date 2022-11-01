import {useMediaQuery} from "../../pages";
import DefaultLayoutMobile from "../Mobile/defaultLayoutMobile";
import DefaultLayoutDesktop from "../Desktop/defaultLayoutDesktop";
import InitialPageUserAccount from "../Desktop/UserAccount/InitialPageUserAccount";
import InitialPageUserAccountMobile from "../Mobile/userAccount/InitialPageUserAccountMobile";

export default function UserAccountDefault() {
    const isSmallDown = useMediaQuery('(max-width: 1360px)');
    return (
        isSmallDown ?
            <DefaultLayoutMobile isDarkMode={false}>
                <InitialPageUserAccountMobile/>
            </DefaultLayoutMobile>
            :
            <DefaultLayoutDesktop isDarkMode={false} isLogged={false} darkModeToggle={null}>
                <InitialPageUserAccount/>
            </DefaultLayoutDesktop>
    )
}