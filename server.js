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

app.use(express.static(`${__dirname}/public`))

app.listen(4000,
   () => console.log(`server running on 4000`))