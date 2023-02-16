export function convertTime(seconds: number){
    const zeroLeft = (number: number) => Math.floor(number).toString().padStart(2, '0')
    const min = zeroLeft((seconds / 60) % 60)
    const sec = zeroLeft((seconds % 60) % 60)

    if (seconds === 60 * 60){
        return '60:00'
    }
    if (seconds < 0){
        return '00:00'
    }
    return `${min}:${sec}`
}