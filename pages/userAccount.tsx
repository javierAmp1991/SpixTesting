import UserAccountDefault from "../components/Globals/UserAccountDefault";
import ProviderUserAccount from "../components/Providers/providerUserAccount";
import ProviderGlobal from "../components/Providers/providerGlobal";
import MyBusinessProvider from "../components/Providers/UserAccount/MyBusinessProvider";
import MyFormProvider from "../components/Providers/UserAccount/MyFormProvider";

export default function UserAccount() {
    return (
        <ProviderUserAccount>
            <ProviderGlobal>
                <MyBusinessProvider>
                    <MyFormProvider>
                        <UserAccountDefault/>
                    </MyFormProvider>
                </MyBusinessProvider>
            </ProviderGlobal>
        </ProviderUserAccount>
    )
}