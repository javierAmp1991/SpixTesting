import style from "/styles/Desktop/Site/TypeSite/Bussines/Beauty&Health/ourJobs.module.css"
import {PresentationCard} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext, useRef, useState} from "react";
import {HeaderDataBHContext} from "../../../../../Providers/Site/TypeSite/Business/Beauty&Health/beautyHealthProvider";
import Image from "next/image";
import {GlobalConst, GlobalId} from "../../../../../../public/globalConst";
import {createPortal} from "react-dom";
import LayoutDisplayGallery from "../../../../Layouts/layoutDisplayGallery";
import {
    LayoutGalleryDesktop,
    MultimediaItem,
    MultimediaItemType,
} from "../../../../../../Class/Layouts/layoutClass";
import Slider from "react-slick";

const ourJobsText: string = "Nuestros Trabajos"
const seeGallery: string = "Ver Galeria"
const idPortal: string = GlobalId.globalIds.idPortal
const gap: number = 48
const lessSpace: number = gap * 2

export default function OurJobs() {
    const info: PresentationCard = useContext(HeaderDataBHContext)
    let [displayGallery, setDisplayGallery] = useState(false)
    let [control, setControl] = useState(1)
    const mainDivRef = useRef(null)
    const sizeDivRef = useRef(null)
    /*    let initialSelection: number = 0
        const handleRight = () => {
            initialSelection += 1
            const firstElement = mainDivRef.current.children[0];
            mainDivRef.current.style.transition = `700ms linear`;
            mainDivRef.current.style.transform = `translateX(-${((sizeDivRef.current.offsetWidth - lessSpace) / 3) + gap}px)`;
            const transition = () => {
                mainDivRef.current.style.transition = `none`;
                mainDivRef.current.style.transform = `translateX(0)`;
                mainDivRef.current.appendChild(firstElement);
                mainDivRef.current.removeEventListener('transitionend', transition)
            }
            mainDivRef.current.addEventListener('transitionend', transition);
        }
        const handleLeft = () => {
            initialSelection -= 1
            const lastIndex: number = mainDivRef.current.children.length - 1;
            const lastElement = mainDivRef.current.children[lastIndex];
            mainDivRef.current.insertBefore(lastElement, mainDivRef.current.firstChild);
            mainDivRef.current.style.transition = `none`;
            mainDivRef.current.style.transform = `translateX(-${((sizeDivRef.current.offsetWidth - lessSpace) / 3) + gap}px)`;

            setTimeout(() => {
                mainDivRef.current.style.transition = `700ms linear`;
                mainDivRef.current.style.transform = `translateX(0px)`;
            }, 30)
        }
        const gallery: LayoutGalleryDesktop = {
            InitialImages: info.SideImages,
            CloseGallery: handleGallery
        }
        const newList: LayoutGalleryDesktop = {
            InitialMedia: [
                {
                    Id: "image001",
                    Type: TypeGallery.Embed,
                    Link: "https://www.youtube.com/embed/6dR-Kx9ZA3s?controls=1"
                },
                {
                    Id: "image002",
                    Type: TypeGallery.Video,
                    Link: "/images/y2mate.com - Metallica Enter Sandman Live in Mexico City Orgullo Pasión y Gloria_v240P.mp4"
                },
                {
                    Id: "image003",
                    Type: TypeGallery.Image,
                    Link: "/images/corte4.jpeg"
                }

            ],
            InitialImages: [],
            CloseGallery: handleGallery
        }*/

    const listMultimediaItem: MultimediaItem[] = [
        {
            Id: "image001",
            Type: MultimediaItemType.Video,
            Link: "https://www.youtube.com/embed/hyV1AJiFNyo?controls=0"
        },
        {
            Id: "image002",
            Type: MultimediaItemType.Video,
            Link: "/images/y2mate.com - Metallica Enter Sandman Live in Mexico City Orgullo Pasión y Gloria_v240P.mp4",
            Thumbnail: "/images/corte4.jpeg"
        },
        {
            Id: "image003",
            Type: MultimediaItemType.Image,
            Link: "/images/corte4.jpeg"
        }
    ]
    const handleGallery = () => setDisplayGallery(displayGallery = !displayGallery)

    const galleryProp: LayoutGalleryDesktop = {
        CloseGallery: handleGallery,
        InitialMedia: listMultimediaItem
    }

    function SampleNextArrow(props) {
        const {className, style, onClick} = props;
        return (
            <div className={className}
                 style={{
                     ...style, display: "block", width: 40, height: 40, background: "white",
                     boxShadow: `0 0 4px rgba(0,0,0,.2)`, zIndex: 100
                 }}
                 onClick={onClick}>
                <Image layout={"fill"} src={GlobalConst.sourceImages.rightArrow} alt={""}/>
            </div>
        );
    }

    function SamplePrevArrow(props) {
        const {className, style, onClick} = props;
        return (
            <div className={className}
                 style={{
                     ...style, display: "block", width: 40, height: 40, background: "white",
                     boxShadow: `0 0 4px rgba(0,0,0,.2)`, zIndex: 100
                 }}
                 onClick={onClick}>
                <Image layout={"fill"} src={GlobalConst.sourceImages.leftArrow} alt={""}/>
            </div>
        );
    }

    const settings = {
        infinite: true,
        slidesToShow: 3,
        speed: 700,
        beforeChange: (current, next) => setControl(next == (info.SideImages.length - 1) ? 0 : next + 1),
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
        draggable: false
    };

    return (
        <div className={style.mainDiv}>
            <div className={style.title}>
                {ourJobsText}
            </div>
            <button onClick={handleGallery} className={style.seeGallery}>
                {seeGallery}
            </button>
            <div className={style.mainGridCarrousel}>
                <div/>
                <div className={style.contSlider}>
                    <Slider {...settings}>
                        {
                            info.SideImages.map((item, index) =>
                                <div key={index}
                                     className={`${style.sizeImage} ${index === control ? style.focus : style.noFocus}`}>
                                    <Image priority={true} layout={"fill"} src={item} alt={""}/>
                                </div>
                            )
                        }
                    </Slider>
                </div>
                <div/>
            </div>
            {/* <div className={style.mainGridCarrousel}>
                <button onClick={handleLeft} className={style.sizeArrow}>
                    <Image layout={"fill"} src={GlobalConst.sourceImages.leftArrow} alt={""}/>
                </button>
                <div ref={sizeDivRef} className={style.contCarrousel}>
                    <div ref={mainDivRef} className={style.gridCarrousel}>
                        <div className={style.contVideoYoutube}>
                            <iframe className={style.videoYoutube}
                                    src={"https://www.youtube.com/embed/6dR-Kx9ZA3s?controls=1"}/>
                        </div>
                        {
                            info.SideImages.map((item, index) =>
                                <div id={idImages + index} key={index} className={`${style.sizeImage}`}>
                                    <Image layout={"fill"} src={item} alt={""}/>
                                </div>
                            )
                        }
                    </div>
                </div>
                <button onClick={handleRight} className={style.sizeArrow}>
                    <Image layout={"fill"} src={GlobalConst.sourceImages.rightArrow} alt={""}/>
                </button>
            </div>*/}
            {
                displayGallery &&
                createPortal(
                    <LayoutDisplayGallery item={galleryProp}/>, document.getElementById(idPortal)
                )
            }
        </div>
    )
}