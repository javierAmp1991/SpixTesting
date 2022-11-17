import SiteBusinessByDefault from "../components/Globals/SiteBusinessByDefault";
import SiteBusinessByDefaultProvider
    from "../components/Providers/Site/TypeSite/Business/ByDefault/SiteBusinessByDefaultProvider";

export default function SiteBusinessDefault() {
    return (
        <SiteBusinessByDefaultProvider>
            <SiteBusinessByDefault/>
        </SiteBusinessByDefaultProvider>
    )
}