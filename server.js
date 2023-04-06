const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '4125ee95fe4044b7938c08e254e05749',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')
rollbar.log('hosted hit')

app.use(express.static(`${__dirname}/public`))

app.get('/hit', (req, res) => {
   console.log('hit')
   rollbar.log('endpoint hit')
   res.sendStatus(200)
})

app.get('/rollbarTest', (req, res) => {
   rollbar.log('Rollbar test successful!')
   res.sendStatus(200)
})

app.listen(4000,
   () => console.log(`server running on 4000`))