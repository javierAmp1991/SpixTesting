import "/styles/globals.css"
import {GlobalId} from "../public/globalConst";
import {MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import CartProvider from "../components/Providers/cartProvider";
const idPortal: string = GlobalId.globalIds.idPortal

function MyApp({Component, pageProps}) {
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <CartProvider>
                <Component {...pageProps} />
                <div id={idPortal}/>
            </CartProvider>
        </MuiPickersUtilsProvider>
    )
}

export default MyApp
