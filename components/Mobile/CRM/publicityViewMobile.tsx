import style from "/styles/Mobile/CRM/publicityMobile.module.css"

export default function PublicityViewMobile({linkImage}) {
    return (
        <a>
            <img className={style.publicityProperties} src={linkImage} alt=""/>
        </a>
    )
}