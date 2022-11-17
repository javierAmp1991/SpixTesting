import BannerVar from "../../../Misc/bannerVar";
import {PrincipalInfoEvent} from "../../../../../Class/Site/TypeSite/Events/events";
import {useContext} from "react";
import {PrincipalInfoEventContext} from "../../../../Providers/Site/TypeSite/Events/eventProvider";

const sizeBanner: string = `40vh`

export default function BannerSiteEvents() {
    const info: PrincipalInfoEvent = useContext(PrincipalInfoEventContext)
    return (
        <BannerVar item={info.PathBanner} size={sizeBanner}/>
    )
}