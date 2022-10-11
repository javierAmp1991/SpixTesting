import style from "/styles/Desktop/UserAccount/accountSectionOption.module.css"
import {AccountSections} from "../../Providers/providerUserAccount";
import Image from "next/image";
import Link from "next/link";
import {GlobalConst} from "../../../public/globalConst";

export default function AccountSectionOption({item}: { item: AccountSections }) {
    return (
        <Link href={item.Link}>
            <div className={style.mainDiv}>
                <div className={style.sizeImage}>
                    <Image layout={"fill"} src={GlobalConst.sourceImages.inOfferIcon}/>
                </div>
                <div className={style.infoDiv}>
                    <div className={style.name}>
                        {item.Name}
                    </div>
                    <div className={style.description}>
                        {item.Description}
                    </div>
                </div>
            </div>
        </Link>
    )
}