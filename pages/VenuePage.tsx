import StadiumLayutProvider from "../components/Desktop/StadiumPage/stadiumLayutProvider";
import VenuePageDefault from "../components/Globals/VenuePageDefault";

export default function VenuePage() {
    return (
        <StadiumLayutProvider>
            <VenuePageDefault/>
        </StadiumLayutProvider>
    )
}