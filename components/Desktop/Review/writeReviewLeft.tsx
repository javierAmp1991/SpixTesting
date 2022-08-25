import Image from "next/image";

export default function WriteReviewLeft(){
    return(
        <div>
            <div>
                Titulo
            </div>
            <div>
                <div>
                    Como calificaria
                </div>
                <div>
                    <div>
                        <Image width={140} height={24} src="/images/ratingNew.png"/>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    Elija un titulo para su review
                </div>
                <div>
                    <input type={"text"}/>
                </div>
            </div>
            <div>
                <div>
                    Escribe tu review
                </div>
                <div>
                    <input type={"text"}/>
                </div>
            </div>
            <div>
                emoticones
            </div>
            <div>
                <div>
                    <Image width={200} height={200} src="/images/thedoor5.jpg"/>
                </div>
            </div>
        </div>
    )
}