import {MediaBase} from "../../../../../Class/UserAccount/userAccount";
import ContMediaRenderMobile from "./contMediaRenderMobile";

export default function ContDropMobile({item, deleteImage, dropItem}:
                                     { item: MediaBase, deleteImage: Function, dropItem: Function }) {

    return (
        <div>
            <ContMediaRenderMobile item={item} deleteImage={deleteImage}/>
        </div>
    )
}