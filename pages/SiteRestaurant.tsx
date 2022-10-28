import SiteRestaurantDefault from "../components/Globals/SiteRestaurantDefault";
import RestaurantProvider from "../components/Providers/Site/TypeSite/Business/Restaurant/restaurantProvider";

export default function SiteRestaurant() {
    return (
        <RestaurantProvider>
            <SiteRestaurantDefault/>
        </RestaurantProvider>
    )
}