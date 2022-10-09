import styleDesk from "/styles/Desktop/StadiumPage/mainPage.module.css"
import {useMediaQuery} from "./index";
import DefaultLayoutMobile from "../components/Mobile/defaultLayoutMobile";
import DefaultLayoutDesktop from "../components/Desktop/defaultLayoutDesktop";
import LayoutStadiumPage from "../components/Desktop/StadiumPage/layoutStadiumPage";
import StadiumImage from "../components/Desktop/StadiumPage/stadiumImage";
import FiltersStadium from "../components/Desktop/StadiumPage/filtersStadium";
import InformationTicket from "../components/Desktop/StadiumPage/InformationTicket";
import React, {useContext, useState} from "react";
import SubareaStadiumDesk from "../components/Desktop/StadiumPage/subareaStadium";
import LayoutStadiumPageMobile from "../components/Mobile/StadiumPage/layoutStadiumPage";
import InformationTicketMobile from "../components/Mobile/StadiumPage/informationTickets";
import FiltersStadiumMobile from "../components/Mobile/StadiumPage/filtersStadium";
import StadiumImageMobile from "../components/Mobile/StadiumPage/stadiumImageMobile";
import SubareaStadiumMobile from "../components/Mobile/StadiumPage/subareaStadium";
import ResumeTicketsMobile from "../components/Mobile/StadiumPage/resumeTickets";
import FilterStadiumSec from "../components/Mobile/StadiumPage/filterStadiumSec";
import InitialPage from "../components/Desktop/StadiumPage/initialPage";
import InitialPageMobile from "../components/Mobile/StadiumPage/InitialPageMobile";
import PopUpContainerMob from "../components/Mobile/Misc/popUpContainerMob";
import MapPopUp, {MapPopUpProp} from "../components/Desktop/Misc/mapPopUp";
import PopUpContainer from "../components/Desktop/Misc/popUpContainer";
import MapPopUpMobile from "../components/Mobile/Misc/mapPopUp";
import {
    NumberTicketWant, PopUpDeletedTickets,
    PopUpSelectedTickets,
    PopUpVenueContext,
    ProviderNumberWantProp,
    ProviderPopUpProp,
    ProviderPopUpTickets
} from "../components/Desktop/StadiumPage/stadiumLayutProvider";
import PopUpContainerLogo from "../components/Desktop/Misc/popUpContainerLogo";
import PopUpSelectedTicketsView from "../components/Desktop/StadiumPage/popUpSelectedTickets";
import PopUpDeletedTicketsView from "../components/Desktop/StadiumPage/popUpDeleteTickets";
import PopUpSelectedTicket from "../components/Mobile/StadiumPage/popUpSelectedTicket";
import {TicketStadium} from "../dataDemo/Desktop/StadiumPage/dataStadium";
import PopUpDeletedTicketsViewMobile from "../components/Mobile/StadiumPage/popUpDeleteTickets";

const isButtonVisible: boolean = true
const isBackGroundVisible: boolean = true

export default function StadiumPage() {
    const isSmallDown = useMediaQuery('(max-width: 1280px)');

    const numberTicketWant: ProviderNumberWantProp = useContext(NumberTicketWant)
    const mapPopUpContext: ProviderPopUpProp = useContext(PopUpVenueContext)
    const providerSelectedTickets: ProviderPopUpTickets = useContext(PopUpSelectedTickets)
    const providerDeletedTickets: ProviderPopUpTickets = useContext(PopUpDeletedTickets)

    const selectedTickets: TicketStadium[] = providerSelectedTickets.Tickets
    const isSelectedTicketsOpen: boolean = providerSelectedTickets.IsOpenPopUpTickets
    const handleCloseSelectedTickets = () => providerSelectedTickets.ClosePopUpTickets()

    const deletedTickets: TicketStadium[] = providerDeletedTickets.Tickets
    const isDeletedTicketsOpen: boolean = providerDeletedTickets.IsOpenPopUpTickets
    const handleClosePopUpDeleteTickets = () => providerDeletedTickets.ClosePopUpTickets()

    const mapPopUpInfo: MapPopUpProp = mapPopUpContext.MapPopUp
    const isPopUpMapOpen: boolean = mapPopUpContext.IsMapOpen
    const handleCloseMap = () => mapPopUpContext.CloseMapPopUp()

    //region hooks
    let [isOpenFilter, setIsOpenFilter] = useState(false)
    const handleOpenFilter = () => setIsOpenFilter(isOpenFilter = !isOpenFilter)

    let [displaySubArea, setDisplaySubArea] = useState(false)
    const handleOpenSubArea = () => setDisplaySubArea(displaySubArea = true)
    const handleCloseSubArea = () => {
        setControlAnimation(controlAnimation = false)
        setDisplaySubArea(displaySubArea = false)
    }

    let [controlAnimation, setControlAnimation] = useState(false)
    const animationZoom = () => {
        setControlAnimation(controlAnimation = true)
        setTimeout(handleOpenSubArea, 1000)
    }

    //endregion

    return (
        isSmallDown ?
            <DefaultLayoutMobile isDarkMode={false}>
                <LayoutStadiumPageMobile>
                    {
                        numberTicketWant.NumberWant == 0 ?
                            <InitialPageMobile/>
                            :
                            <>
                                <LayoutStadiumPageMobile>
                                    <FiltersStadiumMobile isOpenFilter={handleOpenFilter}/>
                                    {
                                        isOpenFilter ?
                                            <FilterStadiumSec/>
                                            :
                                            <>
                                                <div className={styleDesk.overFlowDivMobile}>
                                                    {
                                                        displaySubArea ?
                                                            <SubareaStadiumMobile
                                                                closeSubAreaStadium={handleCloseSubArea}/>
                                                            :
                                                            <StadiumImageMobile
                                                                displaySubAreaSelected={animationZoom}
                                                                stateAnimation={controlAnimation}/>
                                                    }
                                                </div>
                                                <InformationTicketMobile/>
                                            </>
                                    }
                                </LayoutStadiumPageMobile>
                                <ResumeTicketsMobile/>
                                <PopUpSelectedTicket/>
                            </>
                    }
                    {
                        isPopUpMapOpen &&
                        <PopUpContainerMob closePopUp={handleCloseMap} isBackground={isBackGroundVisible}
                                           isButtonVisible={isButtonVisible}>
                            <MapPopUpMobile item={mapPopUpInfo}/>
                        </PopUpContainerMob>
                    }
                    {
                        isDeletedTicketsOpen &&
                        <PopUpContainerMob closePopUp={handleClosePopUpDeleteTickets}
                                           isButtonVisible={isButtonVisible}
                                           isBackground={isBackGroundVisible}>
                            <PopUpDeletedTicketsViewMobile/>
                        </PopUpContainerMob>
                    }
                </LayoutStadiumPageMobile>
            </DefaultLayoutMobile>
            :
            <DefaultLayoutDesktop isDarkMode={false} isLogged={false} darkModeToggle={null}>
                <LayoutStadiumPage>
                    {
                        numberTicketWant.NumberWant == 0 ?
                            <InitialPage/>
                            :
                            <>
                                <FiltersStadium/>
                                <div className={styleDesk.overFlowDiv}>
                                    {
                                        displaySubArea ?
                                            <SubareaStadiumDesk closeSubAreaStadium={handleCloseSubArea}/>
                                            :
                                            <StadiumImage stateAnimation={controlAnimation}
                                                          displaySubAreaSelected={animationZoom}/>
                                    }
                                </div>
                                <InformationTicket/>
                            </>
                    }
                    {
                        isPopUpMapOpen &&
                        <PopUpContainer isButtonVisible={isButtonVisible}
                                        isBackground={isBackGroundVisible}
                                        closePopUp={handleCloseMap}>
                            <MapPopUp item={mapPopUpInfo}/>
                        </PopUpContainer>
                    }
                    {
                        isSelectedTicketsOpen &&
                        <PopUpContainerLogo isButtonVisible={isButtonVisible}
                                            isBackground={isBackGroundVisible}
                                            closePopUp={handleCloseSelectedTickets}>
                            <PopUpSelectedTicketsView
                                selectedTickets={selectedTickets}/>

                        </PopUpContainerLogo>
                    }
                    {
                        isDeletedTicketsOpen &&
                        <PopUpContainerLogo isButtonVisible={isButtonVisible}
                                            isBackground={isBackGroundVisible}
                                            closePopUp={handleClosePopUpDeleteTickets}>
                            <PopUpDeletedTicketsView
                                selectedTickets={deletedTickets}/>
                        </PopUpContainerLogo>
                    }
                </LayoutStadiumPage>
            </DefaultLayoutDesktop>
    )
}