const rawInstance = process.env.REACT_APP_INSTANCE_NAME
const instance = rawInstance ? rawInstance.replace(/'/g, "\\'") : undefined

const getInstance = () => {
  return instance
}

module.exports = getInstance


