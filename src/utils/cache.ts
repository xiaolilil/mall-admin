class LocalCache {
  setCache(key: string, value: any, isLocalStorage?: Boolean) {
    if (isLocalStorage) {
      localStorage.setItem(key, JSON.stringify(value))
    } else {
      sessionStorage.setItem(key, JSON.stringify(value))
    }
  }

  sessionSet(key: any, val: any) {
    sessionStorage.setItem(key, JSON.stringify(val))
  }

  getCache(key: string, isLocalStorage?: Boolean) {
    let value: any
    if (isLocalStorage) {
      value = localStorage.getItem(key)
    } else {
      value = sessionStorage.getItem(key)
    }
    if (value) {
      return JSON.parse(value)
    }
  }

  deleteCache(key: string, isLocalStorage?: Boolean) {
    if (isLocalStorage) {
      localStorage.removeItem(key)
    } else {
      sessionStorage.removeItem(key)
    }
  }

  clearCache() {
    localStorage.clear()
  }
}
export default new LocalCache()
