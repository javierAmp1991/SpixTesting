import style from "/styles/Desktop/Site/TypeSite/Bussines/Restaurant/layoutTitle.module.css"

export default function LayoutTitle({children, title}: { children: JSX.Element, title: string }) {
    return (
        <div className={style.mainDiv}>
            <div className={style.title}>
                {title}
            </div>
            {children}
        </div>
    )
}