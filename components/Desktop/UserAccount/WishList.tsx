import style from "/styles/Desktop/UserAccount/wishList.module.css"
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import {useRef, useState} from "react";
import WishListView from "./wishListView";
import EventVerticalView from "../EventsView/eventVerticalView";
import {EventCardType, EventCardWithPrice} from "../../../dataDemo/EventView/eventVerticalView";

const list: EventCardWithPrice[] = [
    {
        Id: "123456",
        Type: EventCardType.EventCardWithPrice,
        Title: "Restaurant Cinzano para cada momento del dia entonces",
        Subtitle: "Cinzano",
        Rating: 30,
        TotalTickets: 10000,
        SoldTickets: 5000,
        PathImage: "/images/cinzano.jpg",
        MinPrice: 2990,
        MaxPrice: 9990,
    },
    {
        Id: "1234567",
        Title: "WOO! Club",
        Rating: 30,
        TotalTickets: 10000,
        SoldTickets: 9990,
        PathImage: "/images/Woo.png",
        Type: EventCardType.EventCardWithPrice,
        Subtitle: "WOO! Club",
        MinPrice: 2990,
        MaxPrice: 9990,

    },
    {
        Id: "12345678",
        Title: "Black Phone",
        Rating: 30,
        TotalTickets: 10000,
        SoldTickets: 5000,
        PathImage: "/images/blackphone.png",
        Type: EventCardType.EventCardWithPrice,
        Subtitle: "Black Phone",
        MinPrice: 2990,
        MaxPrice: 9990,

    },
    {
        Id: "123456789",
        Title: "Terraza Bellavista",
        Rating: 300,
        TotalTickets: 10000,
        SoldTickets: 9990,
        PathImage: "/images/terrraza1.png",
        Type: EventCardType.EventCardWithPrice,
        Subtitle: "Terraza Bellavista",
        MinPrice: 2990,
        MaxPrice: 9990,

    },
    {
        Id: "1234567890",
        Title: "Marco Polo",
        Rating: 30,
        TotalTickets: 10000,
        SoldTickets: 3000,
        PathImage: "/images/marcoPolo.png",
        Type: EventCardType.EventCardWithPrice,
        Subtitle: "Marco Polo",
        MinPrice: 2990,
        MaxPrice: 9990,

    },
    {
        Id: "12345678901",
        Title: "Bar Civico",
        Rating: 300,
        TotalTickets: 10000,
        SoldTickets: 5000,
        PathImage: "/images/Civico.png",
        Type: EventCardType.EventCardWithPrice,
        Subtitle: "Bar Civico",
        MinPrice: 2990,
        MaxPrice: 9990,

    },
    {
        Id: "1123456",
        Title: "Restaurant Cinzano",
        Rating: 30,
        TotalTickets: 10000,
        SoldTickets: 5000,
        PathImage: "/images/cinzano.jpg",
        Type: EventCardType.EventCardWithPrice,
        Subtitle: "Restaurant Cinzano",
        MinPrice: 2990,
        MaxPrice: 9990,

    },
    {
        Id: "21234567",
        Title: "WOO! Club",
        Rating: 30,
        TotalTickets: 10000,
        SoldTickets: 9990,
        PathImage: "/images/Woo.png",
        Type: EventCardType.EventCardWithPrice,
        Subtitle: "WOO! Club",
        MinPrice: 2990,
        MaxPrice: 9990,

    },
    {
        Id: "312345678",
        Title: "Black Phone",
        Rating: 30,
        TotalTickets: 10000,
        SoldTickets: 5000,
        PathImage: "/images/blackphone.png",
        Type: EventCardType.EventCardWithPrice,
        Subtitle: "Black Phone",
        MinPrice: 2990,
        MaxPrice: 9990,

    },
    {
        Id: "4123456789",
        Title: "Terraza Bellavista",
        Rating: 300,
        TotalTickets: 10000,
        SoldTickets: 9990,
        PathImage: "/images/terrraza1.png",
        Type: EventCardType.EventCardWithPrice,
        Subtitle: "Terraza Bellavista",
        MinPrice: 2990,
        MaxPrice: 9990,

    },
    {
        Id: "51234567890",
        Title: "Marco Polo",
        Rating: 30,
        TotalTickets: 10000,
        SoldTickets: 3000,
        PathImage: "/images/marcoPolo.png",
        Type: EventCardType.EventCardWithPrice,
        Subtitle: "Marco Polo",
        MinPrice: 2990,
        MaxPrice: 9990,

    },
]

const largo: number = 3
const titleSection: string = "WishList"
const subtitleSection: string = "tu lista de deseos"
const gap: number = 16
const padding: number = 32
const numberItems: number = 4
export default function WishList() {
    let [control, setControl] = useState(1)
    const divCarrouselRef = useRef(null)
    const handleClickRight = () => {
        let newControl = control + 1
        if (newControl < (largo - 1)) {
            /*let translate = (((divCarrouselRef.current.offsetWidth + (padding * 2)) - (gap * (numberItems - 1))) / numberItems)
            divCarrouselRef.current.style.transform = `translate(-${translate * newControl}px)`;
            setControl(control += 1)*/
            let translate = divCarrouselRef.current.offsetWidth + (padding * 2)
            divCarrouselRef.current.style.transform = `translate(-${translate * newControl}px)`;
        }

    }
    const handleClickLeft = () => {
        let newControl = control - 1
        if (newControl >= 0) {
            /*let translate = (((divCarrouselRef.current.offsetWidth + (padding * 2)) - (gap * (numberItems - 1))) / numberItems)
            divCarrouselRef.current.style.transform = `translate(-${translate * newControl}px)`;
            setControl(control = newControl)*/

            let translate = divCarrouselRef.current.offsetWidth + (padding * 2)
            divCarrouselRef.current.style.transform = `translate(-${translate * newControl}px)`;
            setControl(control = newControl)
        }

    }
    return (
        <div className={style.mainDiv}>
            <div className={style.overFlow}>
                <div className={style.mainDivTitle}>
                    <div className={style.title}>
                        {titleSection}
                    </div>
                    <div className={style.subtitle}>
                        {subtitleSection}
                    </div>
                </div>
                {/*<div className={style.gridButtonWishLis}>*/}
                {/*                <button onClick={handleClickLeft} className={style.sizeArrow}>
                    <Image layout={"fill"} src={GlobalConst.sourceImages.leftArrow}/>
                </button>*/}
                <div className={style.gridPages}>
                    {
                        [...Array(4)].map(e =>
                            <div className={style.containerCarrousel}>
                                <div ref={divCarrouselRef} className={style.gridItemsWishList}>
                                    {
                                        list.map((e, index) =>
                                            index >= 0 && index <= 2 &&
                                            <EventVerticalView item={e} darkModeState={false}/>
                                        )
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
                {/* <button onClick={handleClickRight} className={style.sizeArrow}>
                    <Image layout={"fill"} src={GlobalConst.sourceImages.rightArrow}/>
                </button>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}