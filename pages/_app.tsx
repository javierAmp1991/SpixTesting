import "/styles/globals.css"
import {GlobalId} from "../public/globalConst";
import {MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const idPortal: string = GlobalId.globalIds.idPortal


function MyApp({Component, pageProps}) {
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Component {...pageProps} />
            <div id={idPortal}></div>
        </MuiPickersUtilsProvider>
    )
}

export default MyApp
