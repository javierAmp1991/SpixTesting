import style from "/styles/Desktop/Site/TypeSite/Bussines/Restaurant/descriptionCard.module.css"
import Image from "next/image";

export default function DescriptionCard() {
    return (
        <div className={style.mainDiv}>
            <div className={style.sizeImage}>
                <Image layout={"fill"} objectFit={"cover"} src={"/images/hellsKitchen.jpg"} alt={""}/>
            </div>
            <div className={style.mainDivInfo}>
                <div className={style.title}>
                    Nuestro Local
                </div>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Corporis culpa dicta libero minima molestiae nihil odio officia
                    quo totam. Alias cum eveniet inventore ipsam necessitatibus,
                    nemo nobis omnis reprehenderit ut voluptatem! Adipisci atque, culpa
                    cum deleniti dignissimos dolores eos eveniet iste iusto laboriosam
                    mollitia nesciunt quidem rem sint suscipit unde.
                </div>
            </div>
        </div>
    )
}