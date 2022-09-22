import Image from "next/image";
import Link from "next/link";

export class VerticalPublicityProp {
    Id: string
    Width: number
    Height: number
    PathImage: string
    Link: string
}

export default function PublicityVertical({item}: { item: VerticalPublicityProp }) {
    return (
        <Link href={item.Link}>
            <div style={{width: item.Width, height: item.Height, position: "relative"}}>
                <Image layout={"fill"} src={item.PathImage}/>
            </div>
        </Link>
    )
}