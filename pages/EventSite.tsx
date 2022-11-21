import EventProvider from "../components/Providers/Site/TypeSite/Events/eventProvider";
import SiteEventDefault from "../components/Globals/SiteEventDefault";

export default function EventSite() {
    return (
        <EventProvider>
            <SiteEventDefault/>
        </EventProvider>
    )
}