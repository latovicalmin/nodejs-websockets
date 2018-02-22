var WebSocketServer = require('ws').Server,
  wss = new WebSocketServer({port: 44444})

wss.on('connection', function (ws) {
  let interval = 1000
  ws.on('message', function (message) {
    console.log('received')
  })

  let sendInterval = setInterval(() => {
    ws.send(`${new Date()}`)
  }, 1000)

  ws.on('close', function () {
    clearInterval(sendInterval)
  });
})
