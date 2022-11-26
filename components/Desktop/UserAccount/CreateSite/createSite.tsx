import style from "/styles/Desktop/UserAccount/CreateSite/createSite.module.css"

const nameSite: string = "Nombre"
const titleSite: string = "Titulo"
const descriptionSite: string = "Descripcion"
const placeHolderName: string = "Ingrese nombre del sitio";
const placeHolderTitleSite: string = "Ingrese nombre del sitio2";
const placeHolderDescriptionSite: string = "Ingrese nombre del sitio3";
const title: string = "Crear Sitio";
const subtitle: string = "Crear Sitio";

export default function CreateSite() {
    return (
        <div className={style.mainDiv}>
            <div>
                <div className={style.title}>
                    {title}
                </div>
                <div className={style.subtitle}>
                    {subtitle}
                </div>
            </div>
            <div className={style.gridNameInput}>
                <div>
                    {nameSite}
                </div>
                <input placeholder={placeHolderName} className={style.input} type={"text"}/>
            </div>
            <div className={style.gridNameInput}>
                <div>
                    {titleSite}
                </div>
                <input placeholder={placeHolderTitleSite} className={style.input} type={"text"}/>
            </div>
            <div className={style.gridNameInput}>
                <div>
                    {descriptionSite}
                </div>
                <input placeholder={placeHolderDescriptionSite} className={style.input} type={"text"}/>
            </div>
        </div>
    )
}