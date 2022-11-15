import style from "/styles/Mobile/Site/TypeSite/Bussines/Restaurant/layoutReviewSection.module.css"

const title: string = "Que opinan nuestros clientes"

export default function LayoutReviewSectionMobile({children}) {
    return (
        <div className={style.mainDiv}>
            <div className={style.title}>
                {title}
            </div>
            <div className={style.rating}>
                Calificacion: 5/5
            </div>

            {children}

            <div className={style.seeMore}>
                Ver mas reseñas
            </div>
        </div>
    )
}