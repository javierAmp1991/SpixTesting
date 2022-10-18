import style from "/styles/Desktop/UserAccount/dashboard.module.css"
import Image from "next/image";
import {GlobalConst} from "../../../public/globalConst";
import {DashBoardContext, ProviderDashBoard} from "../../Providers/providerUserAccount";
import {AccountSectionContext, MenuUserAccount, ProviderAccountSections} from "../../Providers/providerGlobal";
import {useContext} from "react";
import EventVerticalView from "../EventsView/eventVerticalView";
import {PrincipalFeaturedSearch} from "../../../dataDemo/EventView/featureView";
import EditProfileSection from "./editProfileSection";

const titleSection: string = "Dashboard"
const subtitleSection: string = "resumen"
const dayOfWeek: string[] = ["L", "M", "M", "J", "V", "S", "D"]
export default function Dashboard() {
    const actualDate: Date = new Date()
    const dashboardContext: ProviderDashBoard = useContext(DashBoardContext)
    const accountSectionContext: ProviderAccountSections = useContext(AccountSectionContext)
    const handleOption = (type: MenuUserAccount) => accountSectionContext.SelectSection(type)
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
                <div className={style.gridRight}>
                    <div className={style.calendarSection}>
                        <div className={style.headerSection}>
                            <div>Tienes <b>{getActivities()} actividades </b> esta semana!</div>
                            <button onClick={() => handleOption(MenuUserAccount.Calendar)} className={style.seeMore}>Ver
                                todas
                            </button>
                        </div>
                        <button onClick={() => handleOption(MenuUserAccount.Calendar)} className={style.gridCalendar}>
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
                                        <div key={item.Id}
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
                                        </div>
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

                        </button>
                    </div>

                    <div className={style.mainDivWishList}>
                        <div className={style.headerSection}>
                            <div>Wishlist</div>
                            <button onClick={() => handleOption(MenuUserAccount.WishList)} className={style.seeMore}>Ver
                                lista
                            </button>
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
                            <button onClick={() => handleOption(MenuUserAccount.MyCollection)}
                                    className={style.seeMore}>Ver coleccion
                            </button>
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

                <div className={style.gridLeft}>
                    <div className={style.myEditSection}>
                        <div className={style.headerSection}>
                            Edita tu perfil
                        </div>
                        <div className={style.spaceMyEdit}>
                            <EditProfileSection isInDashboard={true}/>
                        </div>
                    </div>
                    <div className={style.myShoppingSection}>
                        <div className={style.headerSection}>
                            <div> Ultimas compras</div>
                            <button onClick={() => handleOption(MenuUserAccount.MyShoppings)} className={style.seeMore}>
                                Ver compras
                            </button>
                        </div>
                        <div className={style.gridItems}>
                            {
                                dashboardContext.MyShoppingItems.map(item =>
                                    <div className={style.colorDiv} key={item.Id}>
                                        <div className={style.name}>
                                            {item.Name} X {item.Amount}
                                        </div>
                                        <div className={style.price}>
                                            ${getMoneyValue(item.Price)}
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    {/* <div className={style.refundSection}>
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
                    </div>*/}
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