import NewLayoutSideCard from "../../../Layouts/newLayoutSideCard";
import SideCard from "./sideCard";
import style from "/styles/Desktop/Site/TypeSite/Events/mainPage.module.css"
import MainCard from "./mainCard";
import FooterDesk from "../../../EventPage/footerDesk";
import FullBanner from "../../../Misc/fullBanner";
import {PrincipalInfoEvent} from "../../../../../Class/Site/TypeSite/Events/events";
import {useContext} from "react";
import {PrincipalInfoEventContext} from "../../../../Providers/Site/TypeSite/Events/eventProvider";

export default function MainPage() {
    const info: PrincipalInfoEvent = useContext(PrincipalInfoEventContext)
    return (
        <>
            <FullBanner item={info.PathBanner}/>
            <div className={style.mainDiv}>
                <NewLayoutSideCard>
                    <MainCard/>
                    <SideCard/>
                </NewLayoutSideCard>
                <FooterDesk/>
            </div>
        </>
    )
}