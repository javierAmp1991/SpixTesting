import style from "/styles/Desktop/CRM/publicity.module.css"

export default function PublicityView({linkImage}) {
    return (
        <a>
            <img className={style.publicityProperties} src={linkImage} alt=""/>
        </a>
    )
}