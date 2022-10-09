import StadiumLayutProvider from "../components/Desktop/StadiumPage/stadiumLayutProvider";
import StadiumPage from "./stadiumPage";

export default function VenuePage() {
    return (
        <StadiumLayutProvider>
            <StadiumPage/>
        </StadiumLayutProvider>
    )
}