export function getCookie(name: string): string | null {
    const cookies = document.cookie
    const cookieRegex = "(^|;)\\s*" + name + "\\s*=\\s*([^;]+)"
    const matches = cookies.match(cookieRegex)

    if (!matches || !matches[0]) {
        return null
    }

    return matches[0]
}

export function setCookie(name: string, value: string, maxAge?: number) {
    if (!maxAge) {
        document.cookie = `${name}=${value}`
        return
    }

    document.cookie = `${name}=${value}; max-age=${maxAge}`
}

export function clearCookie(name: string) {
    setCookie(name, "", 0)
}

