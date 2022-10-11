import UserAccountDefault from "../components/Globals/UserAccountDefault";
import ProviderUserAccount from "../components/Providers/providerUserAccount";

export default function UserAccount() {
    return (
        <ProviderUserAccount>
            <UserAccountDefault/>
        </ProviderUserAccount>
    )
}