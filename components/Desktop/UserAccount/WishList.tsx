import style from "/styles/Desktop/UserAccount/wishList.module.css"
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import {useRef, useState} from "react";
import WishListView from "./wishListView";
import {PrincipalFeaturedSearch} from "../../../dataDemo/EventView/featureView";
import item = PrincipalFeaturedSearch.item;

const largo: number = 6
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
        }

    }
    const handleClickLeft = () => {
        let newControl = control - 1
        if (newControl >= 0) {
            /*let translate = (((divCarrouselRef.current.offsetWidth + (padding * 2)) - (gap * (numberItems - 1))) / numberItems)
            divCarrouselRef.current.style.transform = `translate(-${translate * newControl}px)`;
            setControl(control = newControl)*/
            /*
            let translate = (((divCarrouselRef.current.offsetWidth + (padding * 2)) - (gap * (numberItems - 1))) / numberItems)
  divCarrouselRef.current.style.transform = `translate(-${translate * newControl}px)`;
  setControl(control = newControl)*/
        }

    }
    return (
        <div className={style.mainDiv}>
            <div className={style.mainDivTitle}>
                <div className={style.title}>
                    {titleSection}
                </div>
                <div className={style.subtitle}>
                    {subtitleSection}
                </div>
            </div>
            <div className={style.gridButtonWishLis}>
                <button onClick={handleClickLeft} className={style.sizeArrow}>
                    <Image layout={"fill"} src={GlobalConst.sourceImages.leftArrow}/>
                </button>
                <div className={style.containerCArrousel}>
                    <div ref={divCarrouselRef} className={style.gridItemsWishList}>
                        {
                            [...Array(largo)].map((e, index) =>
                                <WishListView key={index} isUp={false}/>
                            )
                        }
                    </div>
                </div>
                <button onClick={handleClickRight} className={style.sizeArrow}>
                    <Image layout={"fill"} src={GlobalConst.sourceImages.rightArrow}/>
                </button>
            </div>
        </div>
    )
}