import {useMediaQuery} from "../../pages";
import DefaultLayoutMobile from "../Mobile/defaultLayoutMobile";
import DefaultLayoutDesktop from "../Desktop/defaultLayoutDesktop";
import PasswordScanPage from "../Desktop/QR/passwordScanPage";
import {useState} from "react";
import ScanningPage from "../Desktop/QR/scanningPage";
import ScanningData from "../Desktop/QR/scanningData";

export default function QrPageDefault() {
    const isSmallDown = useMediaQuery('(max-width: 1501px)');
    let [statePassword, setStatePassword] = useState(true)
    let [isScanDone, setIsScanDone] = useState(false)

    const handleStatePassword = ()=> setStatePassword(statePassword = false)
    const handleIsScanDonw = ()=> setIsScanDone(isScanDone = true)
    return (
        isSmallDown ?
            <DefaultLayoutMobile isDarkMode={false}>
                <div>

                </div>
            </DefaultLayoutMobile>
            :
            <DefaultLayoutDesktop isDarkMode={false} isLogged={false} darkModeToggle={null}>
                {
                    statePassword ?
                        <PasswordScanPage passwordFunc={handleStatePassword}/>
                        :
                        isScanDone ?
                            <ScanningData/>
                            :
                            <ScanningPage scanningFunc={handleIsScanDonw}/>
                }
            </DefaultLayoutDesktop>
    )
}