const Config = require('.')
const mongoose = require('mongoose')

module.exports = class DBConnection {
  static connect () {
    console.log('DB trying to connect on ' + new Date() + ' to url' + Config.DB)

    const options = {
      keepAlive: 1,
      // autoReconnect: true,
      poolSize: 10,
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
    return mongoose.connect(Config.DB, options)
  }
}

