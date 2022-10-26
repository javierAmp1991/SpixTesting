import style from "/styles/Desktop/Site/TypeSite/Bussines/Restaurant/initialPageRestaurant.module.css"
import HeaderSiteRestaurant from "./HeaderSiteRestaurant";
import {ProductItem, SectionProductItem} from "../../../../../../Class/Misc/GlobalClass";
import {Product} from "../../../../../../dataDemo/data";
import {TodayInValpoFull} from "../../../../../../dataDemo/EventView/eventVerticalView";
import {ReviewsSectionData, QuestionSectionData} from "../../../../../../dataDemo/data";
import FullBannerRestaurant from "../../../../Misc/fullBannerRestaurant";
import DescriptionCard from "./DescriptionCard";
import ReviewDesk from "../../../../EventPage/reviewDesk";
import LayoutReviewSection from "./layoutReviewSection";
import ProductSection from "./ProductSection";
import QuestionDesk from "../../../../EventPage/questionDesk";
import LayoutTitle from "./layoutTitle";
import ProductViewSquare from "../../../../Misc/productViewSquare";
import EventVerticalView from "../../../../EventsView/eventVerticalView";
import PublicityView from "../../../../CRM/publicityView";
import ReviewViewShort from "../../../../Misc/ReviewViewShort";

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
]
const listProducts1: Product[] = [
    {
        Name: "Producto 1.1",
        Price: 18990,
        DiscountPercent: null,
        Include: null,
        ImagePath: "/images/product1.jpg",
    },
    {
        Name: "Producto 2.2",
        Price: 2990,
        DiscountPercent: null,
        Include: null,
        ImagePath: "/images/product4.jpg",
    },
    {
        Name: "Producto 3.3",
        Price: 990,
        DiscountPercent: null,
        Include: null,
        ImagePath: "/images/product5.jpg",
    },
    {
        Name: "Producto 4.4",
        Price: 9990,
        DiscountPercent: null,
        Include: null,
        ImagePath: "/images/product6.jpg",
    },
    {
        Name: "Producto 5.5",
        Price: 10990,
        DiscountPercent: null,
        Include: null,
        ImagePath: "/images/product7.jpg",
    },
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

const sectionProductTest: SectionProductItem = {
    Id: "idSection001",
    Name: "Hamburguesas",
    ListProducts: listProductsOffer
}

export default function InitialPageRestaurant() {
    return (
        <>
            <div className={style.mainGradient}>
                {/*<HeaderSiteRestaurant/>*/}
                <div className={style.mainDivHeader}>
                    <FullBannerRestaurant item={"/images/sushiBanner.jpg"}/>
                    {/*<div className={style.main}>
                        <div className={style.gridPpalProducts}>
                            {
                                listProducts1.map(item =>
                                    <ProductViewSquare key={item.Name} size={null} item={item} isDisplayOffer={true}/>
                                )
                            }
                        </div>
                    </div>*/}
                </div>
                <DescriptionCard/>
            </div>

            <div className={style.mainDiv}>
                <LayoutReviewSection>
                    <div className={style.gridReviews}>
                        {
                            ReviewsSectionData.listReviews.map((item, index) =>
                                index <= 2 &&
                                <ReviewViewShort item={item}/>
                            )
                        }
                    </div>
                </LayoutReviewSection>
                <div className={style.separationLine}/>
                <LayoutTitle title={"Recomendados"}>
                    <div className={style.gridRecomendados}>
                        {
                            TodayInValpoFull.list.map((item, index) =>
                                index <= 4 &&
                                <EventVerticalView key={item.Id} item={item} darkModeState={false}/>)
                        }
                    </div>
                </LayoutTitle>
                <div className={style.separationLine}/>
                <ProductSection sectionProducts={sectionProductTest}/>
                <div className={style.separationLine}/>
                <ProductSection sectionProducts={sectionProductTest}/>
                <div className={style.separationLine}/>
                <ProductSection sectionProducts={sectionProductTest}/>
                <div className={style.separationLine}/>
                <LayoutTitle title={"Preguntas"}>
                    <div className={style.gridQuestions}>
                        {
                            QuestionSectionData.listQuestions.map((item) =>
                                <QuestionDesk key={item.Question} item={item}/>)
                        }
                    </div>
                </LayoutTitle>
            </div>
        </>
    )
}