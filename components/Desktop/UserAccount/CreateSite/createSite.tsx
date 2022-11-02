import style from "/styles/Desktop/UserAccount/CreateSite/createSite.module.css"

const placeHolderName: string = "Ingrese nombre del sitio";
const placeHolderName2: string = "Ingrese nombre del sitio2";
const placeHolderName3: string = "Ingrese nombre del sitio3";
const title: string = "Crear Sitio";

export default function CreateSite() {
    return (
        <div className={style.mainDiv}>
            <div>
                <div className={style.title}>
                    {title}
                </div>
                <div className={style.subtitle}>
                    crear sitio
                </div>
            </div>
            <div className={style.gridNameInput}>
                <div>
                    nombre
                </div>
                <input placeholder={placeHolderName} className={style.input} type={"text"}/>
            </div>
            <div className={style.gridNameInput}>
                <div>
                    nombre
                </div>
                <input placeholder={placeHolderName2} className={style.input} type={"text"}/>
            </div>
            <div className={style.gridNameInput}>
                <div>
                    nombre
                </div>
                <input placeholder={placeHolderName3} className={style.input} type={"text"}/>
            </div>

            <div>

            </div>
        </div>
    )
}