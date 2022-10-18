import style from "/styles/Mobile/UserAccount/myCollection.module.css"
import {useRef, useState} from "react";
import {EventCArdMyCollection, EventCardType, EventCardWishList} from "../../../dataDemo/EventView/eventVerticalView";
import {PrincipalFeaturedSearch} from "../../../dataDemo/EventView/featureView";
import item = PrincipalFeaturedSearch.item;
import EventHorizontalView from "../Events/eventHorizontalView";

const tesetAdd: EventCArdMyCollection[] = [
    {
        Id: "123456",
        Type: EventCardType.EventCardMyCollection,
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
        Type: EventCardType.EventCardMyCollection,
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
        Type: EventCardType.EventCardMyCollection,
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
        Type: EventCardType.EventCardMyCollection,
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
        Type: EventCardType.EventCardMyCollection,
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
        Type: EventCardType.EventCardMyCollection,
        Subtitle: "Bar Civico",
        MinPrice: 2990,
        MaxPrice: 9990,

    },
]

const list: EventCardWishList[] = [
    {
        Id: "123456",
        Type: EventCardType.EventCardWishList,
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
        Type: EventCardType.EventCardWishList,
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
        Type: EventCardType.EventCardWishList,
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
        Type: EventCardType.EventCardWishList,
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
        Type: EventCardType.EventCardWishList,
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
        Type: EventCardType.EventCardWishList,
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
        Type: EventCardType.EventCardWishList,
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
        Type: EventCardType.EventCardWishList,
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
        Type: EventCardType.EventCardWishList,
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
        Type: EventCardType.EventCardWishList,
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
        Type: EventCardType.EventCardWishList,
        Subtitle: "Marco Polo",
        MinPrice: 2990,
        MaxPrice: 9990,

    },
]

const titleSection: string = "Mi coleccion"
const subtitleSection: string = "Estos son los eventos a los que haz asistido"
export default function MyCollectionMobile() {
    let [controlScroll, setControlScroll] = useState(1)
    let [listWishList, setListWishList] = useState(tesetAdd)
    const divCarrouselRef = useRef(null)
    const handleScroll = (e) => {
        if (divCarrouselRef.current.offsetHeight + divCarrouselRef.current.scrollTop + 1 >= divCarrouselRef.current.scrollHeight) {
            setListWishList(listWishList = listWishList.concat(tesetAdd))
            setControlScroll(controlScroll += 1)
            if (controlScroll % 5 == 0) {
                alert(`eliminar primera fila`);
            }
        }
    }

    return (
        <div className={style.mainDiv}>
            <div ref={divCarrouselRef} onScroll={handleScroll} className={style.overFlow}>
                <div className={style.mainDivTitle}>
                    <div className={style.title}>
                        {titleSection}
                    </div>
                    <div className={style.subtitle}>
                        {subtitleSection}
                    </div>
                </div>
                <div className={style.gridPages}>
                    <div className={style.containerCarrousel}>
                        <div className={style.gridItemsWishList}>
                            {
                                listWishList.map((e, index) =>
                                    <EventHorizontalView key={item.Id} item={e} darkModeState={false}/>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
            {/*<div className={style.gridCategorias}>
                <div>
                    Categorias
                </div>
                <div className={style.gridItems}>
                    {
                        [...Array(20)].map(e =>

                            <div className={style.sizeImageCat}>
                                <Image layout={"fill"} src={GlobalConst.sourceImages.wishList}/>
                            </div>
                        )
                    }
                </div>
            </div>*/}
        </div>
    )
}