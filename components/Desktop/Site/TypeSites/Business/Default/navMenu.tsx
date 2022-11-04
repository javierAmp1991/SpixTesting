import style from "/styles/Desktop/Site/TypeSite/Bussines/Default/navMenu.module.css"
import Image from "next/image";
import {PresentationCard} from "../../../../../../Class/Site/TypeSite/Business/restaurantClass";
import {useContext} from "react";
import {HeaderContext} from "../../../../../Providers/Site/TypeSite/Business/Default/defaultProvider";

export default function NavMenu({idItems}) {
    const info: PresentationCard = useContext(HeaderContext)
    const handleTagSelected = (id: string) => {
        let data = document.getElementById(id)
        data.scrollIntoView({behavior: "smooth"})
    }
    return (
        <div className={style.mainDiv}>
            <div className={style.sizeLogo}>
                <Image layout={"fill"} src={info.LogoPath}/>
            </div>
            <button onClick={() => handleTagSelected(idItems.Offer)}>
                Ofertas
            </button>
            <button onClick={()=>handleTagSelected(idItems.Recommended)}>
                Recomendados
            </button>
            <button onClick={() => handleTagSelected(idItems.Products)}>
                Prductos
            </button>
            <button onClick={() => handleTagSelected(idItems.Review)}>
                Reseñas
            </button>
            <button onClick={() => handleTagSelected(idItems.Question)}>
                Preguntas
            </button>
            <button onClick={() => handleTagSelected(idItems.AboutUs)}>
                Sobre Nosotros
            </button>
        </div>
    )
}
