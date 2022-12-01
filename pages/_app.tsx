import "/styles/globals.css"
import {GlobalId} from "../public/globalConst";
import {MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import CartProvider from "../components/Providers/cartProvider";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

const idPortal: string = GlobalId.globalIds.idPortal

function MyApp({Component, pageProps}) {
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <CartProvider>
                <DndProvider backend={HTML5Backend}>
                    <Component {...pageProps} />
                </DndProvider>
                <div id={idPortal}/>
            </CartProvider>
        </MuiPickersUtilsProvider>
    )
}

export default MyApp
