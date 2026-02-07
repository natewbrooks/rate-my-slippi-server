const { SlippiAPI } = require("slippi-api")

/**
 * @param tag - In the form "{USER}-{CODE}" or "{USER}#{CODE}"
 * Converts to "{USER}#{CODE}" and validates
 */
const validateTag = (tag) => {
  if (!tag) return null

  const normalized = tag.replace('-', '#')

  const regex = /^[A-Za-z]{1,7}#[0-9]+$/
  if (!regex.test(normalized)) return null

  if (!SlippiAPI.isValidConnectCode(normalized)) return null

  return normalized
}


/**
 * TAG CONSTRAINTS:
 *  Maximum 8 characters
 *  Must include a # symbol, included in character count
 *  Only numbers are allowed after the # symbol
 */


module.exports = { validateTag }