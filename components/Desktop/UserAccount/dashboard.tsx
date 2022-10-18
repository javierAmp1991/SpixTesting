import style from "/styles/Desktop/UserAccount/dashboard.module.css"
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import {DashBoardContext, ProviderDashBoard, StateMyRefund} from "../../Providers/providerUserAccount";
import {ProviderAccountSections, AccountSectionContext, MenuUserAccount} from "../../Providers/providerGlobal";
import {useContext} from "react";
import utilities from "/styles/utilities.module.css";
import EventVerticalView from "../EventsView/eventVerticalView";
import {PrincipalFeaturedSearch} from "../../../dataDemo/EventView/featureView";
import item = PrincipalFeaturedSearch.item;

const titleSection: string = "Dashboard"
const subtitleSection: string = "resumen"
const dayOfWeek: string[] = ["L", "M", "M", "J", "V", "S", "D"]
export default function Dashboard() {
    const actualDate: Date = new Date()
    const dashboardContext: ProviderDashBoard = useContext(DashBoardContext)
    const accountSectionContext: ProviderAccountSections = useContext(AccountSectionContext)
    const handleCalendar = () => accountSectionContext.SelectSection(MenuUserAccount.Calendar)
    return (
        <div className={style.mainDiv}>
            {/*            <div className={style.mainDivTitle}>
                <div className={style.title}>
                    {titleSection}
                </div>
                <div className={style.subtitle}>
                    {subtitleSection}
                </div>
            </div>*/}
            <div className={style.gridLeftRighSpace}>
                <div className={style.gridLeft}>
                    <div className={style.myShoppingSection}>
                        <div className={style.titleLeft}>
                            Ultimas compras
                        </div>
                        <div className={style.gridItems}>
                            {
                                dashboardContext.MyShoppingItems.map(item =>
                                    <div className={style.colorDiv} key={item.Id}>
                                        <div className={style.name}>
                                            {item.Name}
                                        </div>
                                        <div className={style.price}>
                                            ${getMoneyValue(item.Price)}
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                        <div className={style.styleLink}>
                            Todas mis compras
                        </div>
                    </div>
                    <div className={style.refundSection}>
                        <div className={style.titleLeft}>
                            Todos mis reembolsos
                        </div>
                        <div className={style.gridItems}>
                            {
                                dashboardContext.MyRefundsItems.map(item =>
                                    <div className={style.colorDiv} key={item.Id}>
                                        <div>
                                            {item.Product}
                                        </div>
                                        <div className={style.gridPriceState}>
                                            <div className={style.price}>
                                                ${getMoneyValue(item.Amount)}
                                            </div>
                                            <div>
                                                {
                                                    item.State == StateMyRefund.Aprobed &&
                                                    <div className={style.aproved}>
                                                        Aprobado
                                                    </div>
                                                }
                                                {
                                                    item.State == StateMyRefund.Refused &&
                                                    <div className={style.refused}>
                                                        Rechazado
                                                    </div>
                                                }
                                                {
                                                    item.State == StateMyRefund.Waiting &&
                                                    <div className={style.waiting}>
                                                        En espera
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    </div>)
                            }

                        </div>
                        <div className={style.styleLink}>
                            Todos mis reembolsos
                        </div>
                    </div>
                </div>
                <div className={style.gridRight}>
                    <div className={style.calendarSection}>
                        <div className={style.headerSection}>
                            <div>Tienes <b>{getActivities()} actividades </b> esta semana!</div>
                            <button className={style.seeMore}>Ver todas</button>
                        </div>
                        <div className={style.gridCalendar}>
                            {
                                dayOfWeek.map(item =>
                                    <div key={item} className={style.dayOfWeek}>
                                        {item}
                                    </div>
                                )
                            }
                            {
                                dashboardContext.CalendarItem.map((item, index) =>
                                    item.Activities != null ?
                                        <button key={item.Id}
                                                className={item.ThisDate.getMonth() == actualDate.getMonth() ?
                                                    item.State ? style.divDateSelected : style.divDate : style.divDateEmpty}>
                                            {
                                                item.ThisDate.getMonth() == actualDate.getMonth() &&
                                                <>
                                                    <div className={style.positionNumber}>
                                                        {item.ThisDate.getDate()}
                                                    </div>
                                                    {
                                                        item.Activities != null && item.Activities.length > 1 &&
                                                        <div className={style.gridCircle}>
                                                            {
                                                                item.Activities.map((item, index) =>
                                                                    index >= 0 && index <= 2 &&
                                                                    <div className={style.circle}/>
                                                                )
                                                            }
                                                            {
                                                                item.Activities.length > 2 &&
                                                                <div className={style.plusCircle}>
                                                                    <Image layout={"fill"}
                                                                           src={GlobalConst.sourceImages.plusIconBlue}
                                                                           alt={""}/>
                                                                </div>
                                                            }
                                                        </div>
                                                    }
                                                </>
                                            }
                                        </button>
                                        :
                                        <div key={item.Id}
                                             className={item.ThisDate.getMonth() == actualDate.getMonth() ? style.divDate : style.divDateEmpty}>
                                            {
                                                item.ThisDate.getMonth() == actualDate.getMonth() &&
                                                <>
                                                    <div className={style.positionNumber}>
                                                        {item.ThisDate.getDate()}
                                                    </div>
                                                    {
                                                        item.Activities != null && item.Activities.length > 1 &&
                                                        <div className={style.gridCircle}>
                                                            {
                                                                item.Activities.map((item, index) =>
                                                                    index >= 0 && index <= 2 &&
                                                                    <div className={style.circle}/>
                                                                )
                                                            }
                                                            {
                                                                item.Activities.length > 2 &&
                                                                <div className={style.plusCircle}>
                                                                    <Image layout={"fill"}
                                                                           src={GlobalConst.sourceImages.plusIconBlue}
                                                                           alt={""}/>
                                                                </div>
                                                            }
                                                        </div>
                                                    }
                                                </>
                                            }
                                        </div>
                                )
                            }

                        </div>
                    </div>

                    <div className={style.mainDivWishList}>
                        <div className={style.headerSection}>
                            <div>Wishlist</div>
                            <div className={style.seeMore}>Ver lista</div>
                        </div>
                        <div className={style.wishListSection}>
                            {
                                dashboardContext.WishListItems.map(item =>
                                    <EventVerticalView key={item.Id} item={item} darkModeState={false}/>
                                )
                            }
                        </div>
                    </div>

                    <div className={style.mainDivCollection}>
                        <div className={style.headerSection}>
                            <div>Mi Coleccion</div>
                            <div className={style.seeMore}>Ver coleccion</div>
                        </div>
                        <div className={style.collectionSection}>
                            {
                                dashboardContext.MyCollectionItems.map(item =>
                                    <EventVerticalView key={item.Id} item={item} darkModeState={false}/>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    function getMoneyValue(num: number): string {
        return Intl.NumberFormat("ES-CL").format(Math.round(num))
    }

    function getActivities(): number {
        let control: number = 0
        dashboardContext.CalendarItem.forEach(item => {
            if (item.Activities != null) control += item.Activities.length
        })
        return control
    }
}