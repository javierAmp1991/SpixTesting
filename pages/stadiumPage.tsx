import styleDesk from "/styles/Desktop/StadiumPage/mainPage.module.css"
import {useMediaQuery} from "./index";
import DefaultLayoutMobile from "../components/Mobile/defaultLayoutMobile";
import DefaultLayoutDesktop from "../components/Desktop/defaultLayoutDesktop";
import LayoutStadiumPage from "../components/Desktop/StadiumPage/layoutStadiumPage";
import StadiumImage from "../components/Desktop/StadiumPage/stadiumImage";
import FiltersStadium from "../components/Desktop/StadiumPage/filtersStadium";
import InformationTicket from "../components/Desktop/StadiumPage/InformationTicket";
import React, {useState} from "react";
import Image from "next/image";
import SubareaStadiumDesk from "../components/Desktop/StadiumPage/subareaStadium";
import StadiumLayutProvider from "../components/Desktop/StadiumPage/stadiumLayutProvider";
import SelectionNumber from "../components/Mobile/StadiumPage/selectionNumber";
import LayoutStadiumPageMobile from "../components/Mobile/StadiumPage/layoutStadiumPage";
import InformationTicketMobile from "../components/Mobile/StadiumPage/informationTickets";
import FiltersStadiumMobile from "../components/Mobile/StadiumPage/filtersStadium";
import StadiumImageMobile from "../components/Mobile/StadiumPage/stadiumImageMobile";
import SubareaStadiumMobile from "../components/Mobile/StadiumPage/subareaStadium";
import ResumeTicketsMobile from "../components/Mobile/StadiumPage/resumeTickets";

const listNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export default function StadiumPage() {
    const isSmallDown = useMediaQuery('(max-width: 1280px)');
    //region hooks
    let [initialSelectedTickets, setInitialSelectedTickets] = useState(0)
    const handleNumberTickets = (num: number) => {
        setInitialSelectedTickets(initialSelectedTickets = num)
    }

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
            <StadiumLayutProvider>
                <DefaultLayoutMobile isDarkMode={null}>
                    <>
                    {
                        initialSelectedTickets == 0 ?
                            <SelectionNumber listNumbers={listNumbers} funcNumberTickets={handleNumberTickets}/>
                            :
                            <LayoutStadiumPageMobile>
                                <FiltersStadiumMobile listNumber={listNumbers}
                                                      numberSelected={initialSelectedTickets}
                                                      updateTickets={handleNumberTickets}/>
                                <div className={styleDesk.overFlowDivMobile}>
                                    {
                                        displaySubArea ?
                                            <SubareaStadiumMobile closeSubAreaStadium={handleCloseSubArea}/>
                                            :
                                            <StadiumImageMobile stateSelectedInitialTicket={initialSelectedTickets}
                                                                displaySubAreaSelected={animationZoom}
                                                                stateAnimation={controlAnimation}/>
                                    }
                                </div>
                                <InformationTicketMobile numberSelected={initialSelectedTickets}/>
                            </LayoutStadiumPageMobile>
                    }
                    <ResumeTicketsMobile numberSelected={initialSelectedTickets}/>
                    </>
                </DefaultLayoutMobile>
            </StadiumLayutProvider>
            :
            <StadiumLayutProvider>
                <DefaultLayoutDesktop isDarkMode={false} isLogged={false} darkModeToggle={null}>
                    <LayoutStadiumPage>
                        <>
                            <FiltersStadium numberSelected={initialSelectedTickets}
                                            listNumber={listNumbers}
                                            updateTickets={handleNumberTickets}/>

                            <div className={styleDesk.overFlowDiv}>
                                {
                                    displaySubArea ?
                                        <SubareaStadiumDesk closeSubAreaStadium={handleCloseSubArea}/>
                                        :
                                        <StadiumImage stateAnimation={controlAnimation}
                                                      displaySubAreaSelected={animationZoom}
                                                      stateSelectedInitialTicket={initialSelectedTickets}/>
                                }
                            </div>

                            <InformationTicket numberSelected={initialSelectedTickets}/>

                            {
                                initialSelectedTickets == 0 &&
                                <div className={styleDesk.mainDiv}>
                                    <div className={styleDesk.mainDivPopUp}>
                                        <div className={styleDesk.sizeLogo}>
                                            <Image layout={"fill"} src={"/images/spixBlue.png"} alt={""}/>
                                        </div>
                                        <div className={styleDesk.mainDivSlectionZone}>
                                            <div className={styleDesk.titleInfo}>
                                                Selecciona el numero de entradas que quieres
                                            </div>
                                            <div className={styleDesk.SubtitleInfo}>
                                                No tengo idea que iria aqui pero se que algo debe ir asi que por eso lo
                                                pongo,
                                                y si no va nada que me parta un rasho laser.
                                            </div>
                                            <div className={styleDesk.contGrid}>
                                                <div className={styleDesk.gridSelectionZone}>
                                                    {
                                                        listNumbers.map((item, index) =>
                                                            <button onClick={() => handleNumberTickets(item)}
                                                                    className={styleDesk.contSelection} key={index}>
                                                                {item}
                                                            </button>
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        </>
                    </LayoutStadiumPage>
                </DefaultLayoutDesktop>
            </StadiumLayutProvider>
    )
}