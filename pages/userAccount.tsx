import UserAccountDefault from "../components/Globals/UserAccountDefault";
import ProviderUserAccount from "../components/Providers/providerUserAccount";
import ProviderGlobal from "../components/Providers/providerGlobal";
import MyBusinessProvider from "../components/Providers/UserAccount/MyBusinessProvider";
import {DndProvider} from "react-dnd";
import { TouchBackend } from 'react-dnd-touch-backend'

export default function UserAccount() {
    return (
        <ProviderUserAccount>
            <ProviderGlobal>
                <MyBusinessProvider>
                    <DndProvider backend={TouchBackend}>
                        <UserAccountDefault/>
                    </DndProvider>
                </MyBusinessProvider>
            </ProviderGlobal>
        </ProviderUserAccount>
    )
}