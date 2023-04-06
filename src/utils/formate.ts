export const formateData = (date: string) => {
    const i = date.indexOf('T')
    const iBlank = date.indexOf(' ')
    const d = date.slice(0, 10).replace('-', '.').replace('-', '.')
    const time = date.slice(i + 1, iBlank)
    const iEndTime = time.lastIndexOf(':')
    const answerTime = time.slice(0, iEndTime)
    return `${d},${answerTime}`
}

export const formatePrice = (price: number) => {
    const str = String(Math.floor(price))
    return str.split('').map((el, i) => {
        if(str.split('').length - 3 === i){
            return el = ` ${el}`
        }
        return el
    }).join('')
}

export const createArray = (): number[] => {
    let arr = []
    for(let i = 0; i < 20; i++){
        arr.push(i)
    }
    return arr
}