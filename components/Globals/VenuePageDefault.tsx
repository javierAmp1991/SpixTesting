import styleDesk from "/styles/Desktop/StadiumPage/mainPage.module.css"
import {useMediaQuery} from "../../pages";
import DefaultLayoutMobile from "../Mobile/defaultLayoutMobile";
import DefaultLayoutDesktop from "../Desktop/defaultLayoutDesktop";
import LayoutStadiumPage from "../Desktop/StadiumPage/layoutStadiumPage";
import StadiumImage from "../Desktop/StadiumPage/stadiumImage";
import FiltersStadium from "../Desktop/StadiumPage/filtersStadium";
import InformationTicket from "../Desktop/StadiumPage/InformationTicket";
import React, {useContext, useState} from "react";
import SubareaStadiumDesk from "../Desktop/StadiumPage/subareaStadium";
import LayoutStadiumPageMobile from "../Mobile/StadiumPage/layoutStadiumPage";
import InformationTicketMobile from "../Mobile/StadiumPage/informationTickets";
import FiltersStadiumMobile from "../Mobile/StadiumPage/filtersStadium";
import StadiumImageMobile from "../Mobile/StadiumPage/stadiumImageMobile";
import SubareaStadiumMobile from "../Mobile/StadiumPage/subareaStadium";
import ResumeTicketsMobile from "../Mobile/StadiumPage/resumeTickets";
import FilterStadiumSec from "../Mobile/StadiumPage/filterStadiumSec";
import InitialPage from "../Desktop/StadiumPage/initialPage";
import InitialPageMobile from "../Mobile/StadiumPage/InitialPageMobile";
import PopUpContainerMob from "../Mobile/Misc/popUpContainerMob";
import MapPopUp, {MapPopUpProp} from "../Desktop/Misc/mapPopUp";
import PopUpContainer from "../Desktop/Misc/popUpContainer";
import MapPopUpMobile from "../Mobile/Misc/mapPopUp";
import {
    NumberTicketWant,
    PopUpDeletedTickets,
    PopUpSelectedTickets,
    PopUpVenueContext,
    ProviderNumberWantProp,
    ProviderPopUpProp,
    ProviderPopUpTickets
} from "../Desktop/StadiumPage/stadiumLayutProvider";
import PopUpContainerLogo from "../Desktop/Misc/popUpContainerLogo";
import PopUpSelectedTicketsView from "../Desktop/StadiumPage/popUpSelectedTickets";
import PopUpDeletedTicketsView from "../Desktop/StadiumPage/popUpDeleteTickets";
import PopUpSelectedTicket from "../Mobile/StadiumPage/popUpSelectedTicket";
import PopUpDeletedTicketsViewMobile from "../Mobile/StadiumPage/popUpDeleteTickets";
import {TicketStadium} from "../../dataDemo/Desktop/StadiumPage/dataStadium";

const isButtonVisible: boolean = true
const isBackGroundVisible: boolean = true

export default function VenuePageDefault() {
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