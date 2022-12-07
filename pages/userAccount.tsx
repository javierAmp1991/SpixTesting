import UserAccountDefault from "../components/Globals/UserAccountDefault";
import ProviderUserAccount from "../components/Providers/providerUserAccount";
import ProviderGlobal from "../components/Providers/providerGlobal";
import MyBusinessProvider from "../components/Providers/UserAccount/MyBusinessProvider";
import MyFormProvider from "../components/Providers/UserAccount/MyFormProvider";
import MyServicesProvider from "../components/Providers/UserAccount/MyServicesProvider";

export default function UserAccount() {
    return (
        <ProviderUserAccount>
            <ProviderGlobal>
                <MyBusinessProvider>
                    <MyFormProvider>
                        <MyServicesProvider>
                            <UserAccountDefault/>
                        </MyServicesProvider>
                    </MyFormProvider>
                </MyBusinessProvider>
            </ProviderGlobal>
        </ProviderUserAccount>
    )
}