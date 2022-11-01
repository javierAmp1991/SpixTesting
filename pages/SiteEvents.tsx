import EventProvider from "../components/Providers/Site/TypeSite/Events/eventProvider";
import SiteEventDefault from "../components/Globals/SiteEventDefault";

export default function SiteEvents() {
    return (
        <EventProvider>
            <SiteEventDefault/>
        </EventProvider>
    )
}