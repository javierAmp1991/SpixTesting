import {useMediaQuery} from "../../pages";
import DefaultLayoutMobile from "../Mobile/defaultLayoutMobile";
import DefaultLayoutDesktop from "../Desktop/defaultLayoutDesktop";
import PasswordScanPage from "../Desktop/QR/passwordScanPage";
import {useState} from "react";
import ScanningPage from "../Desktop/QR/scanningPage";
import ScanningData from "../Desktop/QR/scanningData";
import PasswordScanPageMobile from "../Mobile/QR/passwordScanPageMobile";
import ScanningDataMobile from "../Mobile/QR/scanningDataMobile";
import ScanningPageMobile from "../Mobile/QR/scanningPageMobile";

export default function QrPageDefault() {
    const isSmallDown = useMediaQuery('(max-width: 1360px)');
    let [statePassword, setStatePassword] = useState(true)
    let [isScanDone, setIsScanDone] = useState(true)

    const handleStatePassword = ()=> setStatePassword(statePassword = false)
    const handleIsScanDonw = ()=> setIsScanDone(isScanDone = !isScanDone)
    return (
        isSmallDown ?
            <DefaultLayoutMobile isDarkMode={false}>
                {
                    statePassword ?
                        <PasswordScanPageMobile passwordFunc={handleStatePassword}/>
                        :
                        isScanDone ?
                            <ScanningDataMobile returnFunction={handleIsScanDonw}/>
                            :
                            <ScanningPageMobile scanningFunc={handleIsScanDonw}/>
                }
            </DefaultLayoutMobile>
            :
            <DefaultLayoutDesktop isDarkMode={false} isLogged={false} darkModeToggle={null}>
                {
                    statePassword ?
                        <PasswordScanPage passwordFunc={handleStatePassword}/>
                        :
                        isScanDone ?
                            <ScanningData returnFunction={handleIsScanDonw}/>
                            :
                            <ScanningPage scanningFunc={handleIsScanDonw}/>
                }
            </DefaultLayoutDesktop>
    )
}