import style from "/styles/Desktop/Misc/fullBanner.module.css"
const idCarrouselBanner: string = "idCarrouselBanner"

export default function FullBanner({item}) {
    return (
        <a>
            <img id="" className={style.sizeImageBanner} src={item} alt=""/>
        </a>
    )
}
