import {useEffect, useState} from "react";

export default function Timer({isDays}: { isDays: boolean }) {
    let [timeControl] = useState(new Date().getTime() + 600000)
    let [days, setDays] = useState("00")
    let [hours, setHours] = useState("00")
    let [minutes, setMinutes] = useState("00")
    let [seconds, setSeconds] = useState("00")

    const handleTimer = () => {
        isDays &&
        setDays(days = correctNumber(getDays(new Date().getTime())))

        setHours(hours = correctNumber(getHours(new Date().getTime())))
        setMinutes(minutes = correctNumber(getMinutes(new Date().getTime())))
        setSeconds(seconds = correctNumber(getSeconds(new Date().getTime())))
    }

    function getDays(num: number) {
        const newNum = timeControl - num
        return Math.floor(newNum % (1000 * 60 * 60 * 24))
    }

    function getHours(num: number) {
        const newNum = timeControl - num
        return Math.floor(newNum % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    }

    function getMinutes(num: number) {
        const newNum = timeControl - num
        return Math.floor(newNum % (1000 * 60 * 60) / (1000 * 60))
    }

    function getSeconds(num: number) {
        const newNum = timeControl - num
        return Math.floor(newNum % (1000 * 60) / (1000))
    }

    function correctNumber(num: number): string {
        if (num >= 0 && num <= 9) {
            return `0${num}`
        } else return `${num}`
    }

    useEffect(() => {
        const interval = setInterval(handleTimer, 1000)
        return () => clearInterval(interval)
    })
    return (
        <div>
            {isDays && <span>{days}:</span>}
            <span>00:</span>
            <span>{minutes}:</span>
            <span>{seconds}</span>
        </div>
    )
}