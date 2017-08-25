const { send } = require('micro')
const url = require('url')

module.exports = function (request, response) {
 
  send(response, 200, 'Hello World!!  Christine is awesome!')
}