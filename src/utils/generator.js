module.exports = {
  generateRandomToken (chars, length) {
    let token = ''
  
    for (let i = 0; i < length; i++) {
      token += chars.charAt(Math.floor(Math.random() * chars.length))
    }
  
    return token
  }
}
