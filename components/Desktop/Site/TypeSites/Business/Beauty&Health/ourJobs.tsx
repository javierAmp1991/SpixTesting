import style from "/styles/Desktop/Site/TypeSite/Bussines/Beauty&Health/ourJobs.module.css"
import Image from "next/image"

const listCortes: string[] = ["/images/corte4.jpeg", "/images/corte1.jpg", "/images/corte2.jpg", "/images/corte3.jpg", "/images/corte5.jpg"]
export default function OurJobs() {
    return (
        <div className={style.mainDiv}>
            <div className={style.title}>
                Nuestros Trabajos
            </div>
            <div className={style.gridCarrousel}>
                <div/>
                <div className={style.gridImages}>
                    {
                        listCortes.map((item, index) =>
                            <div key={index} className={`${style.sizeImage} ${getStyle(index)}`}>
                                <Image layout={"fill"} src={item} alt={""}/>
                            </div>
                        )
                    }
                </div>
                <div/>
            </div>
        </div>
    )

    function getStyle(num: number): string {
        if (num == 2) return style.focus
        else if (num == 0 || num == 4) return style.noFocus2
        else return style.noFocus
    }
}