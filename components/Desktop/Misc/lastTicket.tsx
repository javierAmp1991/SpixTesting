import styles from "/styles/utilities.module.css";
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
export class LastTicketProp{
    SoldTickets: number
    TotalTickets: number
}

export default function LastTicket({item} : {item: LastTicketProp}){
    return(

             item.SoldTickets >= item.TotalTickets * 0.90 &&
                <div className={styles.positionLastTickets}>
                    <Image layout={"fill"} src={GlobalConst.sourceImages.lastTicket} alt=""/>
                </div>
    )
}