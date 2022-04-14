
import { TOKEN_TIME, TOKEN_TIME_VALUE } from './constant'

export const setTimeToken = () => {
    localStorage.setItem(TOKEN_TIME,Date.now())

}

export const getTimeToken = () => {
    return localStorage.getItem(TOKEN_TIME)
}

export const diffTimeToken = () => {
    const currentTime = Date.now()
    const tokenTime = getTimeToken()
    return currentTime-tokenTime>TOKEN_TIME_VALUE 
}