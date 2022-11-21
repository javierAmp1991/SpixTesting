import {
    HeaderSiteBusinessProp,
    PresentationCard,
    TypeSiteBusiness
} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext} from "react";
import {
    PrincipalInfoByDefaultContext
} from "../../../../../Providers/Site/TypeSite/Business/ByDefault/SiteBusinessByDefaultProvider";
import style from "/styles/Desktop/Site/TypeSite/Bussines/ByDefault/presentationCard.module.css"
import Image from "next/image";
import HeaderSiteBussinessByDefault from "./headerSiteBussinessByDefault";
import useGalleryImagesHook, {GalleryHook} from "../../../../../../CustomHooks/galleryHook";
import {LayoutGalleryProps} from "../../../../../../Class/Layouts/layoutClass";
import {createPortal} from "react-dom";
import LayoutDisplayGallery from "../../../../Layouts/layoutDisplayGallery";
import {GlobalId} from "../../../../../../public/globalConst";
import HeaderSiteBussiness from "../Misc/headerSiteBussiness";
import SideImages from "../../Misc/sideImages";
import LayoutPresentationCard from "../../Misc/layoutPresentationCard";
import LayoutAnnouncementInfo from "../../Misc/layoutAnnouncementInfo";
import Announcement from "../../Misc/announcement";
import {AnnouncementStyle} from "../../../../../../Class/Site/TypeSite/Misc/globalClassSite";
const styleAnnouncement: AnnouncementStyle = AnnouncementStyle.SiteEvents


const seeGallery: string = "Ver galeria"
const idPortal: string = GlobalId.globalIds.idPortal

export default function PresentationCardByDefault() {
    const info: PresentationCard = useContext(PrincipalInfoByDefaultContext)
    const headerBusiness: HeaderSiteBusinessProp = {
        Name: info.Name,
        Description: info.Description,
        Tags: info.Tags,
        Venue: info.Venue,
        Contact: info.Contact,
        TypeSite: TypeSiteBusiness.Default,
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
                AmountSubscribers: 200
            }
        },
    }
    const isAnnouncement: boolean = info.Announcement == null

    const initialGallery: GalleryHook = useGalleryImagesHook(info.GalleryImages)
    /* const handleOpenGallery = (id: string) => {
         initialGallery.SetGallery(id)
         initialGallery.HandleDisplayGallery()
     }*/
    const handleOpenGallery = () => initialGallery.HandleDisplayGallery()
    const galleryProp: LayoutGalleryProps = {
        CloseGallery: initialGallery.HandleDisplayGallery,
        InitialMedia: initialGallery.InitialList
    }

    return (
        <LayoutPresentationCard>
            <LayoutAnnouncementInfo>
                {
                    info.Announcement != null &&
                    <Announcement styleAnnouncement={styleAnnouncement} announcement={info.Announcement}/>
                }
                <HeaderSiteBussiness item={headerBusiness}/>
            </LayoutAnnouncementInfo>
            <SideImages galleryImages={info.GalleryImages} logo={info.LogoPath}/>
            {/* <button onClick={handleOpenGallery} className={style.contImage}>
                <div className={style.firstGradient}>
                    <div className={style.background}/>
                </div>
                <div className={style.sizeImage}>
                    <Image layout={"fill"} src={info.ImagePath} alt={""}/>
                </div>
                <div className={style.seeGallery}>
                    {seeGallery}
                </div>
            </button>*/}
            {/* {
                initialGallery.DisplayGallery &&
                createPortal(
                    <LayoutDisplayGallery item={galleryProp}/>, document.getElementById(idPortal)
                )
            }*/}
        </LayoutPresentationCard>
    )
}