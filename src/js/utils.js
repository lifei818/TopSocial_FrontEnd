import path from "path-browserify"

export function isNumber(element) {
  return element === +element
}

export function isFalsy(element) {
  return (element !== 0 && !!element == false)
}

export function getPath(...info) {
  const dbPath = import.meta.env.VITE_DB_PATH
  const fullPath = getHttpHeader() + path.join(dbPath, ...info)
  console.log(fullPath);
  return fullPath
}

export function getPathWithID(id, ...info) {
  return isNumber(id) ? getPath(...info, id) : getPath(...info)
}

export function getWebSiteRunningMode() {
  return import.meta.env.MODE
}

export function getHttpHeader() {
  if (getWebSiteRunningMode() === 'development' || getWebSiteRunningMode() === 'dev') {
    return 'http://'
  }
  return 'http://'
}