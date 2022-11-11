import SiteBeautyAndHealthDefault from "../components/Globals/SiteBeautyAndHealthDefault";
import BeautyHealthProvider from "../components/Providers/Site/TypeSite/Business/Beauty&Health/beautyHealthProvider";

export default function SiteBeautyAndHealth() {

    return (
        <BeautyHealthProvider>
            <SiteBeautyAndHealthDefault/>
        </BeautyHealthProvider>
    )
}