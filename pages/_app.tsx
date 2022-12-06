import "/styles/globals.css"
import {GlobalId} from "../public/globalConst";
import {MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import CartProvider from "../components/Providers/cartProvider";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import ProductAndGroupProvider from "../components/Providers/UserAccount/ProductAndGroupProvider";
import {TouchBackend} from "react-dnd-touch-backend";

const opt = {
    enableTouchEvents: true,
    enableMouseEvents: true,
    scrollAngleRanges: [
        { start: 30, end: 150 },
        { start: 210, end: 330 },
        { start: 300 },
        { end: 60 },
        { start: 120, end: 240 }
    ]
}

const idPortal: string = GlobalId.globalIds.idPortal

function MyApp({Component, pageProps}) {
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <CartProvider>
                <DndProvider backend={TouchBackend} options={opt}>
                    <ProductAndGroupProvider>
                        <Component {...pageProps}/>
                    </ProductAndGroupProvider>
                </DndProvider>
                <div id={idPortal}/>
            </CartProvider>
        </MuiPickersUtilsProvider>
    )
}

export default MyApp
