import { isServer } from '.'

/**
 * Cookies parsers and interactors based of this SO answer:
 * https://stackoverflow.com/questions/14573223/set-cookie-and-get-cookie-with-javascript
 * =============================================================================
 */
const setCookie = (name, value = '', days = 30) => {
  if (isServer()) {
    return
  }

  let expires = ''

  if (days) {
    const date = new Date()
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    expires = `; expires=${date.toUTCString()}`
  }

  document.cookie = `${name}=${value}${expires}; path=/`
}

const getCookie = isServer()
  ? (name, req) => req.cookies[name]
  : (name) => {
      const nameEQ = `${name}=`
      const ca = document.cookie.split(';')

      for (let i = 0; i < ca.length; i += 1) {
        let c = ca[i]
        while (c.charAt(0) === ' ') c = c.substring(1, c.length)
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
      }
      return null
    }

const eraseCookie = (name) => {
  setCookie(name, '', -1)
}

export { getCookie, setCookie, eraseCookie }
