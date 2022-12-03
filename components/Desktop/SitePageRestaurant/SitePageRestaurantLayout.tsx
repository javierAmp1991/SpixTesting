import style from "/styles/Desktop/SitePage/sitePageRestaurantLayout.module.css"
import HeaderSiteRestaurant from "./HeaderSiteRestaurant";
import {ProductItem} from "../../../Class/Misc/GlobalClass";
import ProductViewHor from "../Misc/ProductViewHor";
import FullBannerRestaurant from "../Misc/fullBannerRestaurant";
import DescriptionCard from "./DescriptionCard"
import {ReviewsSectionData} from "../../../dataDemo/data";
import ReviewDesk from "../EventPage/reviewDesk";

const listProducts: ProductItem[] = [
    {
        Id: "idProduct01",
        Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsam iusto minus perspiciatis quis voluptate.",
        Name: "Producto 1.1",
        Price: 18990,
        DiscountPercent: null,
        Include: null,
        ImagePath: "/images/product1.jpg",
    },
    {
        Id: "idProduct02",
        Name: "Producto 2.2",
        Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsam iusto minus perspiciatis quis voluptate.",
        Price: 2990,
        DiscountPercent: null,
        Include: null,
        ImagePath: "/images/product4.jpg",
    },
    {
        Id: "idProduct03",
        Name: "Producto 3.3",
        Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsam iusto minus perspiciatis quis voluptate.",
        Price: 990,
        DiscountPercent: null,
        Include: null,
        ImagePath: "/images/product5.jpg",
    },
    /*    {
            Id: "idProduct04",
            Name: "Producto 4.4",
            Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsam iusto minus perspiciatis quis voluptate.",
            Price: 9990,
            DiscountPercent: null,
            Include: "Dcto 2 Un.",
            ImagePath: "/images/product6.jpg",
        },
        {
            Id: "idProduct05",
            Name: "Producto 5.5",
            Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsam iusto minus perspiciatis quis voluptate.",
            Price: 10990,
            DiscountPercent: 30,
            Include: null,
            ImagePath: "/images/product7.jpg",
        },
        {
            Id: "idProduct06",
            Name: "Producto 6.6",
            Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsam iusto minus perspiciatis quis voluptate.",
            Price: 10990,
            DiscountPercent: 30,
            Include: null,
            ImagePath: "/images/product8.jpg",
        },*/
]

const listProductsOffer: ProductItem[] = [
    {
        Id: "idProduct01",
        Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsam iusto minus perspiciatis quis voluptate.",
        Name: "Producto 1.1",
        Price: 18990,
        DiscountPercent: 20,
        Include: null,
        ImagePath: "/images/product1.jpg",
    },
    {
        Id: "idProduct02",
        Name: "Producto 2.2",
        Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsam iusto minus perspiciatis quis voluptate.",
        Price: 2990,
        DiscountPercent: 30,
        Include: null,
        ImagePath: "/images/product4.jpg",
    },
    {
        Id: "idProduct03",
        Name: "Producto 3.3",
        Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsam iusto minus perspiciatis quis voluptate.",
        Price: 990,
        DiscountPercent: 40,
        Include: null,
        ImagePath: "/images/product5.jpg",
    },
    {
        Id: "idProduct04",
        Name: "Producto 4.4",
        Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsam iusto minus perspiciatis quis voluptate.",
        Price: 9990,
        DiscountPercent: null,
        Include: "Dcto 2 Un.",
        ImagePath: "/images/product6.jpg",
    },
    {
        Id: "idProduct05",
        Name: "Producto 5.5",
        Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsam iusto minus perspiciatis quis voluptate.",
        Price: 10990,
        DiscountPercent: 30,
        Include: null,
        ImagePath: "/images/product7.jpg",
    },
    {
        Id: "idProduct06",
        Name: "Producto 6.6",
        Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsam iusto minus perspiciatis quis voluptate.",
        Price: 10990,
        DiscountPercent: 30,
        Include: null,
        ImagePath: "/images/product8.jpg",
    }
]

export default function SitePageRestaurantLayout() {
    return (
        <>
            <div className={style.mainGradient}>
                <HeaderSiteRestaurant/>
                <div className={style.mainDivHeader}>
                    <FullBannerRestaurant item={"/images/sushiBanner.jpg"}/>
                    <div className={style.main}>
                        <div className={style.gridPpalProducts}>
                            {
                                listProducts.map(item =>
                                    <ProductViewHor key={item.Id} item={item} displayFullProduct={true}/>
                                )
                            }
                        </div>
                    </div>
                </div>
                <DescriptionCard/>
            </div>

            <div className={style.mainDiv}>
                <div>
                    Esto opinan nuestros clientes
                </div>
                <div>
                    estrellas
                </div>
                <div className={style.gridReviews}>
                    {
                        ReviewsSectionData.listReviews.map((item, index) =>
                            index <= 2 &&
                            <ReviewDesk item={item}/>
                        )
                    }
                </div>
            </div>
        </>
    )
}