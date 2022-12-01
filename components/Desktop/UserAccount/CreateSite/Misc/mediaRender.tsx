import style from "/styles/Desktop/UserAccount/CreateSite/Misc/mediaRender.module.css"
import {MediaBase, MediaImage, MediaType, MediaVideo, MediaYoutube} from "../../../../../Class/UserAccount/userAccount";
import Image from "next/image";
import {GlobalConst} from "../../../../../public/globalConst";

export default function MediaRender({item, displayMedia}: { item: MediaBase, displayMedia: boolean }) {
    let mediaVideo: MediaVideo;
    let mediaImage: MediaImage;
    let mediaYoutube: MediaYoutube;

    if (item.Type == MediaType.Image) mediaImage = item as MediaImage
    else if (item.Type == MediaType.Video) mediaVideo = item as MediaVideo
    else mediaYoutube = item as MediaYoutube

    return (
        <div className={style.contMedia}>
            {
                item.Type == MediaType.Video ?
                    displayMedia ?
                        <video poster={mediaVideo.Thumbnail} controls={true} className={style.video}
                               src={mediaVideo.Url}/>
                        :
                        <>
                            <div className={style.playIconVideo}>
                                <Image layout={"fill"} src={GlobalConst.sourceImages.playIcon} alt={""}/>
                            </div>
                            <Image layout={"fill"} className={style.video} src={mediaVideo.Thumbnail} alt={""}/>
                        </>
                    :
                    <></>
            }

            {
                item.Type == MediaType.Image &&
                <Image objectFit={"cover"} layout={"fill"} src={mediaImage.Url} alt={""}/>
            }

            {
                item.Type == MediaType.Youtube ?
                    displayMedia ?
                        <iframe className={style.iframe} src={mediaYoutube.Url}/>
                        :
                        <>
                            <div className={style.playIconYoutube}>
                                <Image layout={"fill"} src={GlobalConst.sourceImages.playIconYoutube}/>
                            </div>
                            <Image layout={"fill"} className={style.video}
                                   src={getThumbnail(mediaYoutube.Url)} alt={""}/>
                        </>
                    :
                    <></>

            }
        </div>
    )

    function getThumbnail(src) {
        let thumbnail = src.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/).pop();
        if (thumbnail.length == 11) return `https://img.youtube.com/vi/${thumbnail}/0.jpg`
    }
}