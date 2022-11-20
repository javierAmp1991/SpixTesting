import style from "/styles/Mobile/Site/TypeSite/Bussines/Restaurant/descriptionCardData.module.css"
import Image from "next/image";
import {
    HeaderSiteBusinessProp,
    PresentationCard,
    TypeSiteBusiness
} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext, useState} from "react";
import {HeaderContext} from "../../../../../Providers/Site/TypeSite/Business/Restaurant/restaurantProvider";
import LayoutWithNavCircleMobile from "../../../../Layouts/layoutWithNavCircleMobile";
import HeaderSiteBussinessMobile from "../Misc/headerSiteBussinessMobile";
import {LayoutGalleryProps} from "../../../../../../Class/Layouts/layoutClass";
import {createPortal} from "react-dom";
import LayoutDisplayGalleryMobile from "../../../../Layouts/layoutDisplayGalleryMobile";
import {GlobalId} from "../../../../../../public/globalConst";

const seeCard: string = "Ver carta"
const idPortal: string = GlobalId.globalIds.idPortal


export default function DescriptionCardFullData() {
    const info: PresentationCard = useContext(HeaderContext)
    let [displayGallery, setDisplayGallery] = useState(false)
    const handleGallery = () => setDisplayGallery(displayGallery = !displayGallery)
    const headerBusiness: HeaderSiteBusinessProp = {
        Name: info.Name,
        Description: info.Description,
        Tags: info.Tags,
        Venue: info.Venue,
        TypeSite: TypeSiteBusiness.Restaurant,
        SocialButtons: {
            Like: {
                IsLike: true,
                AmountLikes: 500,
            },
            WishList: {
                IsLike: false,
                Like: 156
            },
            Subscription: {
                IsSubscriber: false,
                AmountSubscribers: 300
            }
        },
        Contact: info.Contact,
    }
    const galleryProps: LayoutGalleryProps = {
        InitialMedia: info.GalleryImages,
        CloseGallery: handleGallery
    }
    return (
        <div className={style.mainDiv}>
            <div className={style.contInfo}>
                <HeaderSiteBussinessMobile item={headerBusiness}/>
            </div>

            <div className={style.contCarrousel}>
                <div className={style.sizeLogo}>
                    <Image layout={"fill"} src={info.LogoPath} alt={""}/>
                </div>
                <LayoutWithNavCircleMobile isDarkMode={false}>
                    {
                        info.SideImages.map((e) =>
                            <div onClick={handleGallery} key={e} className={style.sizeSideImage}>
                                <Image layout={"fill"} src={e} alt={""}/>
                            </div>
                        )
                    }
                </LayoutWithNavCircleMobile>
                <div className={style.button}>
                    {seeCard}
                </div>
            </div>

            {
                displayGallery &&
                createPortal(
                    <LayoutDisplayGalleryMobile item={galleryProps}/>, document.getElementById(idPortal)
                )
            }
        </div>
    )
}