const APP = require('express')
const DBConnection = require('./config/dbConnection')
const Utils = require('./app/utils')
const Config = require('./config')
const routes = require('./routes')
const constants = require('./app/common/constants')

const app = new APP()
require('./config/express')(app)
global.lhtWebLog = Utils.lhtLog

class Server {
  static listen () {
    Promise.all([DBConnection.connect()])
    .then(() => {
    app.listen(Config.PORT)
    Utils.lhtLog('listen', `Server Started on port ${Config.PORT}`, {}, 'RK', constants.httpConstants.LOG_LEVEL_TYPE.INFO)
    routes(app)
    }).catch(error => Utils.lhtLog('listen', 'failed to connect', { err: error }, 'RK', constants.httpConstants.LOG_LEVEL_TYPE.ERROR))
  }
}
Server.listen()
