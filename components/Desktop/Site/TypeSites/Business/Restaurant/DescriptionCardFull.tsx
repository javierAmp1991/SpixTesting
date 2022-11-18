import style from "/styles/Desktop/Site/TypeSite/Bussines/Restaurant/descriptionCardFull.module.css"
import utilitiesSites from "/styles/Desktop/Site/TypeSite/Misc/utilitiesSites.module.css"
import Image from "next/image";
import {
    HeaderSiteBusinessProp,
    PresentationCard,
    TypeSiteBusiness
} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext, useState} from "react";
import {HeaderContext} from "../../../../../Providers/Site/TypeSite/Business/Restaurant/restaurantProvider";
import PopUpContainer from "../../../../Misc/popUpContainer";
import {createPortal} from "react-dom";
import {GlobalId} from "../../../../../../public/globalConst";
import HeaderSiteBussiness from "../Misc/headerSiteBussiness";
import LayoutDisplayGallery from "../../../../Layouts/layoutDisplayGallery";
import {LayoutGalleryProps} from "../../../../../../Class/Layouts/layoutClass";

const idPortal: string = GlobalId.globalIds.idPortal
const seeGallery: string = "Ver galeria"

export default function DescriptionCardFull() {
    const info: PresentationCard = useContext(HeaderContext)
    let [imageDisplay, setImageDisplay] = useState("")
    let [displayImage, setDisplayImage] = useState(false)
    let [displayGallery, setDisplayGallery] = useState(false)
    const handleDisplayGallery = () => setDisplayGallery(displayGallery = !displayGallery)
    const handlePopUpImage = () => setDisplayImage(displayImage = !displayImage)
    const handleClickImage = (path: string) => {
        setImageDisplay(imageDisplay = path)
        handlePopUpImage()
    }
    const headerBusiness: HeaderSiteBusinessProp = {
        Name: info.Name,
        Description: info.Description,
        Tags: info.Tags,
        Venue: info.Venue,
        Contact: info.Contact,
        TypeSite: TypeSiteBusiness.Restaurant,
        SocialButtons: {
            Like: {
                IsLike: false,
                AmountLikes: 500,
            },
            WishList: {
                IsLike: false,
                Like: 156
            },
            Subscription: {
                IsSubscriber: false,
                AmountSubscribers: 200
            }
        }
    }
    const isAnnouncement: boolean = info.Announcement == null
    const galleryProp: LayoutGalleryProps = {
        InitialMedia: info.GalleryImages,
        CloseGallery: handleDisplayGallery
    }
    return (
        <div className={`${style.mainDiv} ${utilitiesSites.boxShadowCards}  ${utilitiesSites.marginUnderCard}
                ${isAnnouncement ? style.fullRadious : style.noRadious}`}>
            <div className={style.gridLeft}>
                <div className={style.sizeImage}>
                    <Image layout={"fill"} objectFit={"cover"} src={info.ImagePath} alt={""}/>
                </div>
                <div className={style.paddingInfo}>
                    <HeaderSiteBussiness item={headerBusiness}/>
                </div>
            </div>

            <div className={style.mainContSide}>
                <div className={style.sizeLogo}>
                    <Image layout={"fill"} src={info.LogoPath} alt={""}/>
                </div>
                <div className={style.gridImageButton}>
                    <div className={style.gridSideImage}>
                        {
                            info.GalleryImages.map((e, index) =>
                                <div key={index} className={
                                    index == 0 ? style.top : index == 1 ? style.center : style.bottom}>
                                    <button onClick={() => handleClickImage(e.Link)} className={style.sizeSideImage}>
                                        <Image layout={"fill"} src={e.Link} alt={""}/>
                                    </button>
                                </div>
                            )
                        }
                    </div>
                    <button onClick={handleDisplayGallery} className={style.seeGalery}>
                        {seeGallery}
                    </button>
                </div>
            </div>
            {
                displayGallery &&
                createPortal(
                    <LayoutDisplayGallery item={galleryProp}/>, document.getElementById(idPortal)
                )
            }
            {
                displayImage &&
                createPortal(
                    <PopUpContainer closePopUp={handlePopUpImage} isButtonVisible={true} isBackground={false}>
                        <div className={style.imagePopUp}>
                            <Image layout={"fill"} objectFit={"cover"} src={imageDisplay} alt={""}/>
                        </div>
                    </PopUpContainer>, document.getElementById(idPortal)
                )
            }
        </div>
    )
}