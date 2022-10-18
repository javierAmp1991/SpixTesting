import UserAccountDefault from "../components/Globals/UserAccountDefault";
import ProviderUserAccount from "../components/Providers/providerUserAccount";
import ProviderGlobal from "../components/Providers/providerGlobal";

export default function UserAccount() {
    return (
        <ProviderUserAccount>
            <ProviderGlobal>
                <UserAccountDefault/>
            </ProviderGlobal>
        </ProviderUserAccount>
    )
}