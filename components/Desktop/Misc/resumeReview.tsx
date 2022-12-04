import style from "/styles/Desktop/Misc/resumeReview.module.css"

export class ResumeByStar {
    NumberStar: number
    TotalReviews: number
}
export class ResumeReviews {
    TotalReviews: number
    Qualifications: ResumeByStar[]
}

const starSingleText: string = "Estrella"
const starMoreText: string = "Estrellas"

const prueba: ResumeReviews = {
    TotalReviews: 100,
    Qualifications: [
        {
            NumberStar: 5,
            TotalReviews: 40
        },
        {
            NumberStar: 4,
            TotalReviews: 30
        },
        {
            NumberStar: 3,
            TotalReviews: 10
        },
        {
            NumberStar: 2,
            TotalReviews: 10
        },
        {
            NumberStar: 1,
            TotalReviews: 10
        }
    ]
}

export default function ResumeReview({item}: { item: ResumeReviews }) {
    return (
        <div className={style.mainGrid}>
            {
                prueba.Qualifications.map(item =>
                    <div key={item.NumberStar} className={style.gridItems}>
                        <div className={style.gridNumberStar}>
                            <span>{item.NumberStar}</span><span>{item.NumberStar == 1 ? starSingleText : starMoreText}</span>
                        </div>
                        <div className={style.bar}>
                            <div style={{width: `${getPercentage(item.TotalReviews)}%`}} className={style.progressBar}/>
                        </div>
                        <div>
                            {getPercentage(item.TotalReviews)}%
                        </div>
                    </div>
                )
            }
        </div>
    )

    function getPercentage(numberReviews: number): number {
        return Math.round((numberReviews * 100) / prueba.TotalReviews)
    }
}