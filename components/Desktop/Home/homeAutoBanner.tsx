import style from "/styles/Desktop/Home/homeAutoBanner.module.css"

export default function HomeAutoBanner({linkImage}){
    return(
            <div>
                <img className={style.sizeImageCarrrouselBanners} src={linkImage} alt=""/>
            </div>
    )
}
