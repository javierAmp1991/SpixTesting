import style from "/styles/Mobile/Misc/levelUserPopUp.module.css"
import utilities from "/styles/utilities.module.css";
import Image from "next/image";

const buttonText: string = "Realizar Verificacion"
const level1Req: string[] = [
    "Nombre completo",
    "Direccion",
    "RUT",
    "Fecha de nacimiento"
]
const level2Req: string[] = [
    "Nombre completo",
    "Direccion",
    "RUT",
    "Fecha de nacimiento",
    "Foto frontal y al reverso de la cedula de identidad",
    "Selfie frontal "
]
const level2ReqLvl1: string[] = [
    "Foto frontal y al reverso de la cedula de identidad",
    "Selfie frontal "
]
const disclaimer: string = "Esta verificacion fue solicitada por el adminsitrador del evento y no es un requisito impuesto por Spix. Lo anterior queda a discrecion del admnitrador del evento \n" +
    "y generalmente es solicitado para asegurar la seguridad del cliente (ud), la exclusividad del evento o por aspectos legales."

export default function LevelUserPopUpMobile({levelVerfication, levelUser}: { levelVerfication: number, levelUser: number }) {
    return (
        <div className={style.mainDiv}>
            <div className={style.logoSpix}>
                <Image layout={"fill"} src={"/images/spixBlue.png"}/>
            </div>
            <div className={`${utilities.fontTitle} ${style.spaceTitle}`}>
                Verificacion requerida
            </div>

            <div className={style.actualLevel}>
                <div className={style.sizeImage}>
                    <Image layout={"fill"} src={"/images/shieldIconColor.png"}/>
                </div>
                <div>
                    {
                        levelUser > 0 ?
                            `Tu nivel de verificacion actual es ${levelUser}`
                            :
                            `Actualmente no estas verificado`
                    }
                </div>
            </div>

            <p className={style.mainText}>
                Este evento requiere de verificacion <b>nivel {levelVerfication}</b> para comprar entradas. La verificacion nivel <b>nivel {levelVerfication}</b> consiste de los siguientes requisitos:`
            </p>
            <div className={style.req}>
                {
                    levelVerfication == 1 && levelUser < 1 ?
                        <>
                            {

                                level1Req.map(item =>
                                    <div className={style.divRes} key={item}><div className={style.circle}/> {item}</div>)
                            }
                        </>
                        :
                        levelVerfication == 2 && levelUser == 1 ?
                            <>
                                {level2ReqLvl1.map(item =>
                                    <div className={style.divRes} key={item}><div className={style.circle}/> {item}</div>)}
                            </>
                            :
                            <>
                                {level2Req.map(item =>
                                    <div className={style.divRes} key={item}><div className={style.circle}/> {item}</div>)}
                            </>

                }
            </div>

            <p className={style.disclaimer}>
                {disclaimer}
            </p>
            <div className={style.gridButtons}>
                <button className={style.buttonLevelUser}>{buttonText}</button>
            </div>
        </div>
    )
}