sender = require './socket-sender'

logger = module.exports

logger.info = (text) ->
  sender('info', text)

logger.debug = (text) ->
  sender('debug', text)