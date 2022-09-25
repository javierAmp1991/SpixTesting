import style from "/styles/Desktop/Misc/levelUserPopUp.module.css"

export default function LevelUserPopUp() {
    return (
        <div className={style.mainDiv}>
            <div>
                Informacion 1
            </div>
            <div>
                Informacon 2
            </div>
            <div className={style.gridButtons}>
                <button className={style.buttonLevelUser}>Completar registro</button>
                <button className={style.buttonLevelUser}>Cerrar</button>
            </div>
        </div>
    )
}